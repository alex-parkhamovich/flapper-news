class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user

  has_many :taggings
  has_many :tags, through: :taggings

  accepts_nested_attributes_for :tags
  accepts_nested_attributes_for :taggings

  validates_presence_of :tags

  def as_json(options = {})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end
end
