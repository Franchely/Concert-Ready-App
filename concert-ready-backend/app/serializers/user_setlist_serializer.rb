class UserSetlistSerializer < ActiveModel::Serializer
  attributes :id, :setlist
  has_one :user
end
