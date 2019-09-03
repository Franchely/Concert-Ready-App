class SetlistSerializer < ActiveModel::Serializer
  attributes :id, :artist, :date, :city, :country, :venue, :setlist_songs

end
