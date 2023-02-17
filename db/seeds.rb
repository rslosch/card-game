# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

puts "SEEDING DATABASE..."

Card.destroy_all

Card.create!(
    content: "You’re in an arena with: 50 hawks, 10 crocodiles, 3 brown bears, 15 wolves, 1 hunter with rifle, 7 buffalo, 10,000 rats, 5 gorillas, 4 lions. Pick 2 to defend you. The others attack you. Goal is to survive 1 hour."
)
Card.create!(
    content: "Would you kill a homeless person to save 1,000 people? Nobody knows it was you who saved them and you have blood on your hands..."
)
Card.create!(
    content: "If you were on a deserted island with a AI robot of the opposite sex, but it became self-aware and started coming onto you, would you fight it to the death or allow what happens to happen?"
)
Card.create!(
    content: "You wake up in a room with no windows or doors. There is a single light bulb hanging from the ceiling. You have no memory of how you got there. You have a pen and paper. What do you do?"
)
Card.create!(
    content: "You are in a room with a tiger, a lion, a bear, and a gorilla. You have a gun with 2 bullets. What do you do?"
)

10.times do
    content = Faker::Lorem.words(number: rand(15..30)).join(' ')
    Card.create(content: content)
end

puts "DONE SEEDING!"