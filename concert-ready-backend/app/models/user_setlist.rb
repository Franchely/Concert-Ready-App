class UserSetlist < ApplicationRecord

  belongs_to :user
  belongs_to :setlist 
end
