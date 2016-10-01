Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'tag/create'

  devise_for :users

  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show, :destroy] do
    resources :comments, only: [:show, :create, :destroy] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end

  resources :tags
  
end
