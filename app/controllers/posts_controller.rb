class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params.merge(user_id: current_user.id))
  end

  def show
    respond_with Post.find(params[:id])
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    respond_with post.all
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

  private
  def post_params
    params.require(:post).permit(:body, :title)
  end

end
