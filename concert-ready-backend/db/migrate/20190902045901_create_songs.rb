class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.belongs_to :setlist, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
