class User < ApplicationRecord
    has_many :user_setlists, dependent: :destroy

    has_secure_password

    validates :username, uniqueness: true 
    validates :username, presence: true 
    validates :password, presence: true
    validates :location, presence: true 
end
