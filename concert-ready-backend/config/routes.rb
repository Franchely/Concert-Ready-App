Rails.application.routes.draw do
  resources :user_setlists
  resources :setlist_songs
  resources :songs
  resources :setlists
  resources :artists
  resources :users
  resources :auth, only: [:create]

  get '/persist', to: 'auth#persist'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
