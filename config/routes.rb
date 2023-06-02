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
      get 'core_infos/:token', to: 'core_infos#show', constraints: { token: /[^\/]+/ }, as: 'core_info'
      post '/p', to: 'gpt#serialize', as: 'gpt'

      post '/generate_link/:token', to: 'temporary_links#generate', constraints: { token: /[^\/]+/ }, format: false, as: 'generate_link'
      get '/show_link/:token', to: 'temporary_core_infos#show', constraints: { token: /[^\/]+/ }, format: false, as: 'show_link'
    end
  end
  
  get 'core_infos', to: 'core_infos#index'
end
