class Setlist < ApplicationRecord
    belongs_to :artist
    has_many :user_setlists, dependent: :destroy 
    has_many :setlist_songs, dependent: :destroy
    has_many :songs, through: :setlist_songs
end
