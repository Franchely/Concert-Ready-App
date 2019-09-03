class RemoveSongsFromSetlist < ActiveRecord::Migration[5.2]
  def change
    remove_column :setlists, :song_id
  end
end
