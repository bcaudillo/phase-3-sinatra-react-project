# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_22_192246) do

  create_table "beers", force: :cascade do |t|
    t.string "brands"
    t.string "names"
    t.string "styles"
    t.string "ibu"
    t.string "abv"
    ##t.integer cart_id //add
  end

  create_table "carts", force: :cascade do |t|
    # t.string "cart_name" ## add all that exist are associated to one cart. 
    # t.string "item_name" ##omit
    # t.integer "quantity" ##omit
    # t.integer "beer_id" do not need
    # what needs to happen here is I need to have many carts
  end

end
