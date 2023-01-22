class CreateCarts < ActiveRecord::Migration[6.1]
  def change
      create_table :carts do |t|
        t.string :item_name
        t.integer :quantity
        t.integer :beer_id
    end
  end
end
