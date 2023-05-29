# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  get '/forbidden', to: 'home#forbidden'
  root to: 'home#index'
  
  get 'authors/:token', to: 'authors#show', constraints: { token: /[^\/]+/ }, format: false, as: 'author'

  namespace :api do
    namespace :v1 do
      get 'authors/:token', to: 'authors#show', constraints: { token: /[^\/]+/ }, as: 'author'
    end
  end
  
  get 'authors', to: 'authors#index'
end
