class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :mbid
      t.integer :tmid
      t.string :sortName

      t.timestamps
    end
  end
end
