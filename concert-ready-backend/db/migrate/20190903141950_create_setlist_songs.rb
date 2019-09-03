class CreateSetlistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :setlist_songs do |t|
      t.belongs_to :song, foreign_key: true
      t.belongs_to :setlist, foreign_key: true

      t.timestamps
    end
  end
end
