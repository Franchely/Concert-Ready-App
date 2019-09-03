class SetlistSongSerializer < ActiveModel::Serializer
  attributes :id, :song_name 
  has_one :song
  has_one :setlist

  def song_name
    song_name = self.object
    song_name.song.name
  end

end
