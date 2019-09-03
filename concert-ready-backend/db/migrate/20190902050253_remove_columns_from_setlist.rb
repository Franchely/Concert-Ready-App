class RemoveColumnsFromSetlist < ActiveRecord::Migration[5.2]
  def change
    remove_column :setlists, :artistName
    add_column :setlists, :artist, :string
    remove_column :setlists, :cityName
    add_column :setlists, :city, :string
    remove_column :setlists, :year
    remove_column :setlists, :venueName
    add_column :setlists, :venue, :string
    remove_column :setlists, :tourName
    add_column :setlists, :country, :string 
  end
end
