class RemoveColumnsFromArtist < ActiveRecord::Migration[5.2]
  def change
    remove_column :artists, :mbid, :string
    remove_column :artists, :tmid, :string
    remove_column :artists, :sortName, :string
  end
end
