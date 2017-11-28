# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Photo.destroy_all

demouser = User.create!(username: "demouser", password: "password")
user1 = User.create!(username: "user", password: "password" )
photo1 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511840465/FullSizeRender_ifynf3.jpg")