# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/sessions/registrations' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  get '/forbidden', to: 'home#forbidden'
  root to: 'core_infos#show'
  
  get 'c/:id', to: 'core_infos#show', as: 'core_info'

  
  
  namespace :api do
    namespace :v1 do
      get 'core_infos/', to: 'core_infos_index#index'

      get 'core_infos/:token', to: 'core_infos#show', constraints: { token: /[^\/]+/ }, as: 'core_info'
      post '/p', to: 'gpt#create', as: 'gpt'

      put '/core_infos_put', to: 'core_infos_transactions#update'
      put '/experiences_put', to: 'experiences_transactions#update'
      put '/educations_put', to: 'educations_transactions#update'


      post '/generate_link/:token', to: 'temporary_links#create', constraints: { token: /[^\/]+/ }, format: false, as: 'generate_link'
      get '/show_link/:token', to: 'temporary_core_infos#show', constraints: { token: /[^\/]+/ }, format: false, as: 'show_link'
    end
  end
  
  get 'core_infos', to: 'core_infos#index'
  post 'core_infos', to: 'core_infos#create'
end
