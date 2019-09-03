class AddColumnsToSetlist < ActiveRecord::Migration[5.2]
  def change
    add_reference :setlists, :song, foreign_key: true
    add_reference :setlists, :artist, foreign_key: true
  end
end
