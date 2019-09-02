class CreateSetlists < ActiveRecord::Migration[5.2]
  def change
    create_table :setlists do |t|
      t.string :artistName
      t.string :date
      t.string :cityName
      t.string :state
      t.string :artistMbid
      t.string :tourName
      t.string :venueName
      t.string :year

      t.timestamps
    end
  end
end
