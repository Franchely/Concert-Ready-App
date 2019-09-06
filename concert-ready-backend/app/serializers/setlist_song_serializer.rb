class SetlistSongSerializer < ActiveModel::Serializer
  attributes :id
  has_one :song
  has_one :setlist


end
