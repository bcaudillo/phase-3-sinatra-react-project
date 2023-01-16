class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :brands
      t.string :names
      t.string :styles
      t.string :ibu
      t.string :abv
    end
  end
end
