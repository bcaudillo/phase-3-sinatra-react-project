require 'faker'


puts "🌱 Seeding spices..."

# Seed your database here
beer = Faker::Beer
20.times{Beer.create(brands: beer.brand, names: beer.name, styles: beer.style, ibu: beer.ibu, abv: beer.alcohol )}
# 10.times{Beer.create(brands:Faker::Beer.brand, name: Faker::Beer.name)}
# 10.times{Beer.create(brands: Faker::Beer.unique.brand, names: Faker::Beer.unique.name, styles:Faker::Beer.unique.style, ibu: Faker::Beer.unique.ibu, abv: Faker::Beer.unique.alcohol )}
# Cart.create(item_name: Faker::Beer.unique.name)
a = Faker::Beer.unique.name
# 20.times{Cart.create(item_name: Faker::Beer.unique.name, quantity: 4)}
puts "✅ Done seeding!"
