class AddColumnToSetlistSong < ActiveRecord::Migration[5.2]
  def change
    add_column :setlist_songs, :song_name, :string
  end
end
