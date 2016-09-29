class User < ApplicationRecord
  extend Enumerize

  enumerize :role, in: [:user, :admin], default: :user
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
