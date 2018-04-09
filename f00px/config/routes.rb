Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show, :index, :edit, :update, :destroy] do 
      resources :photos, only: [:index]
    end 
    resource :session, only: [:create, :destroy]
    get 'photos/dashboard', to: 'photos#dashboard'
    resources :photos, only: [:create, :update, :index, :show, :destroy]
    resources :follows, only: [:create, :destroy]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
end
