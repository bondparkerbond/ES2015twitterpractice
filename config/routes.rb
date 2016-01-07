Rails.application.routes.draw do
  
  root 'dashboard#index'
  resources :tweets
  devise_for :users, controller: { registrations: 'registrations' }
  
end
