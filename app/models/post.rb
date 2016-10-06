class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags
  belongs_to :user
  validates_presence_of :tags
  accepts_nested_attributes_for :tags

  def as_json(options = {})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end
end
