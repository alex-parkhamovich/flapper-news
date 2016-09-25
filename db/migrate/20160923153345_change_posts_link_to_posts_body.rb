class ChangePostsLinkToPostsBody < ActiveRecord::Migration[5.0]
  def change
    rename_column :posts, :link, :body
  end
end
