class SetlistSerializer < ActiveModel::Serializer
  attributes :id, :artistName, :date, :cityName, :state, :artistMbid, :tourName, :venueName, :year
end
