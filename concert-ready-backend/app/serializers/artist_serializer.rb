class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :mbid, :tmid, :sortName
end
