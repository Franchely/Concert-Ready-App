class UserSetlistSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :setlist
end
