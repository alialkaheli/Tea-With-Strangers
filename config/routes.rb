Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events do
      resources :join_tables, only: [:create]
    end 
    resources :join_tables, only: [:destroy]
  end 
  root "static_pages#root"
end
