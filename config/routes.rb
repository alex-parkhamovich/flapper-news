Rails.application.routes.draw do

  devise_for :users
  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show, :destroy] do
    resources :comments, only: [:show, :create] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end
  
end
