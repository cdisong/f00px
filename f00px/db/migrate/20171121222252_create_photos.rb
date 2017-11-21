class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.text :description 
      t.string :image_url 
      t.integer :author_id, foreign_key: { on_delete: :cascade }

      t.timestamps
    end
    add_index :photos, :author_id
  end
end
