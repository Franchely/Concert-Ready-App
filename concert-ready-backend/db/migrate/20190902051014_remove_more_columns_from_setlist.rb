class RemoveMoreColumnsFromSetlist < ActiveRecord::Migration[5.2]
  def change
    remove_column :setlists, :artistMbid
    remove_column :setlists, :state
  end
end
