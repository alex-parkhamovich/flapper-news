Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'tag/create'

  devise_for :users

  root to: 'application#angular'

  resources :posts do
    resources :comments do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end

    resources :tags
    resources :taggings
  
end
