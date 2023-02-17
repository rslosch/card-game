Rails.application.routes.draw do
  resources :cards
  get '/randomHeroCards', to: 'cards#getRandomHeros'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
