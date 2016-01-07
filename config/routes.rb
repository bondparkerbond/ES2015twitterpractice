Rails.application.routes.draw do
  
  root 'dashboard#index'
  resources :tweets
  devise_for :users, controllers: { registrations: 'registrations' }
  
end
