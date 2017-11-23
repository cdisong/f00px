Rails.application.routes.draw do
  

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show, :index, :edit, :update, :destroy]
    resource :session, only: [:create, :new, :destroy]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
end
