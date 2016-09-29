class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :tags
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end
end
