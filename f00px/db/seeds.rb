# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Photo.destroy_all

demouser = User.create!(username: "demouser", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user1 = User.create!(username: "user1", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user2 = User.create!(username: "user2", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user3 = User.create!(username: "user3", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user4 = User.create!(username: "user4", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user5 = User.create!(username: "user5", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user7 = User.create!(username: "anna", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")
user8 = User.create!(username: "chris", password: "password", description: "hi, I like pie", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/v1512084188/No_image_available_dscbys.svg")

Follow.create!(follower_id: demouser.id, followed_id: user4.id)
Follow.create!(follower_id: user4.id, followed_id: demouser.id)


photo1 = Photo.create!(description: "earthday2017", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511848535/earthday.png")
photo2 = Photo.create!(description: "westtoucla", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845945/westtoucla.png")
photo3 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845937/citypark.png")
photo4 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845910/herebedragons.png")
photo5 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845910/zionredwalls.png")
photo36 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511892806/portlanddusk.png")
photo6 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845894/uclajungle.png")
photo7 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845881/tennyson.png")
photo8 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845860/icelick.png")
photo9 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511898158/coldmountain.png")
photo10 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845819/itchyteeth.png")
photo11 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845794/solitude.png")
photo12 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845780/babblingbrook.png")
photo13 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845764/treetunnel.png")
photo14 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845756/urbandestruction.png")
photo15 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845745/zionriver.png")
photo16 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845735/ziontemple.png")

photo18 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845713/latesummerdays.jpg")
photo17 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845717/shadesandshadows.jpg")


photo19 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845693/californiaafterglow.jpg")

photo20 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845676/cottoncandyfreewaysky.png")

photo21 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845672/johnmuir.png")

photo22 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845668/bearmountain.png")

photo23 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845658/portlandlanding.png")

photo24 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845648/japanesegarden.png")

photo25 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845632/walkingdownalonelyroad.png")

photo26 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845622/hydrangeas.png")
photo27 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845610/sdmarbledtide.png")

photo28 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845604/finearts.png")

photo29 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845593/cliffsideend.png")

photo30 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845089/backyardgoals.png")

photo31 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844999/vline.jpg")

photo32 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844912/wesanderson.jpg")

photo33 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844481/portlandtrees_fqd351.png")

photo34 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844465/dtusc_nmcunc.png")

photo35 = Photo.create!(description: "hi", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844461/sdsunset_f6nbla.png")
