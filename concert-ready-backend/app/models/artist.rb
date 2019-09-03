class Artist < ApplicationRecord
    has_many :setlists, dependent: :destroy
    has_many :setlistsongs, through: :setlists 
end
