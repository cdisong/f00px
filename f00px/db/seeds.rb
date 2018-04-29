# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Photo.destroy_all
Follow.destroy_all

demouser = User.create!(username: "DemoUser", password: "password", description: "Hi, I like pie.", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
user1 = User.create!(username: "Richard", password: "password", description: "What is a circle?", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
user2 = User.create!(username: "Cindy", password: "password", description: "I have strawberry blonde hair.", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
user3 = User.create!(username: "Rummi", password: "password", description: "I am a software engineer", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
user4 = User.create!(username: "Janet", password: "password", description: "I like things", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
user5 = User.create!(username: "Penelope", password: "password", description: "I love puppies!", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png" )
# user5 = User.create!(username: "I am tired", password: "password", description: "I would like to sleep.", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
# user7 = User.create!(username: "Anna", password: "password", description: "The Space Goat", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")
user6 = User.create!(username: "Chris", password: "password", description: "", profile_img_url: "http://res.cloudinary.com/cdisong/image/upload/c_scale,h_124/v1512126883/anonymous.png")

Follow.create!(follower_id: demouser.id, followed_id: user4.id) #demouser is following 
Follow.create!(follower_id: user5.id, followed_id: demouser.id) # demouser has follower 
# Follow.create!(follower_id: user7.id, followed_id: demouser.id)
# Follow.create!(follower_id: user8.id, followed_id: demouser.id)
Follow.create!(follower_id: user3.id, followed_id: demouser.id)
Follow.create!(follower_id: user2.id, followed_id: demouser.id)
Follow.create!(follower_id: user1.id, followed_id: demouser.id)
Follow.create!(follower_id: demouser.id, followed_id: user1.id) 
Follow.create!(follower_id: demouser.id, followed_id: user2.id)
Follow.create!(follower_id: demouser.id, followed_id: user3.id)
# Follow.create!(follower_id: demouser.id, followed_id: user7.id)
Follow.create!(follower_id: demouser.id, followed_id: user5.id)
# Follow.create!(follower_id: demouser.id, followed_id: user8.id)

Follow.create!(follower_id: user1.id, followed_id: user4.id)
Follow.create!(follower_id: user1.id, followed_id: user3.id)
# Follow.create!(follower_id: user1.id, followed_id: user7.id)
Follow.create!(follower_id: user1.id, followed_id: user5.id)
# Follow.create!(follower_id: user1.id, followed_id: user8.id)
Follow.create!(follower_id: user4.id, followed_id: user1.id)
Follow.create!(follower_id: user6.id, followed_id: user1.id)
Follow.create!(follower_id: user2.id, followed_id: user1.id)
# Follow.create!(follower_id: user7.id, followed_id: user1.id)
Follow.create!(follower_id: user5.id, followed_id: user1.id)
# Follow.create!(follower_id: user8.id, followed_id: user1.id)

Follow.create!(follower_id: user2.id, followed_id: user4.id)
Follow.create!(follower_id: user2.id, followed_id: user3.id)
# Follow.create!(follower_id: user2.id, followed_id: user7.id)
Follow.create!(follower_id: user2.id, followed_id: user6.id)
# Follow.create!(follower_id: user2.id, followed_id: user8.id)
Follow.create!(follower_id: user6.id, followed_id: user2.id)
Follow.create!(follower_id: user3.id, followed_id: user2.id)
# Follow.create!(follower_id: user8.id, followed_id: user2.id)
# Follow.create!(follower_id: user7.id, followed_id: user2.id)

Follow.create!(follower_id: user3.id, followed_id: user4.id)
# Follow.create!(follower_id: user3.id, followed_id: user7.id)
Follow.create!(follower_id: user3.id, followed_id: user5.id)
# Follow.create!(follower_id: user3.id, followed_id: user8.id)
Follow.create!(follower_id: user4.id, followed_id: user3.id)
# Follow.create!(follower_id: user7.id, followed_id: user3.id)
Follow.create!(follower_id: user5.id, followed_id: user3.id)
# Follow.create!(follower_id: user8.id, followed_id: user3.id)

Follow.create!(follower_id: user5.id, followed_id: user6.id)
# Follow.create!(follower_id: user5.id, followed_id: user7.id)
# Follow.create!(follower_id: user5.id, followed_id: user8.id)

# Follow.create!(follower_id: user7.id, followed_id: user5.id)
Follow.create!(follower_id: user6.id, followed_id: user5.id)
# Follow.create!(follower_id: user8.id, followed_id: user5.id)

Follow.create!(follower_id: user4.id, followed_id: user5.id)
Follow.create!(follower_id: user4.id, followed_id: user6.id)
# Follow.create!(follower_id: user4.id, followed_id: user7.id)
# Follow.create!(follower_id: user4.id, followed_id: user8.id)

# Follow.create!(follower_id: user7.id, followed_id: user4.id)
Follow.create!(follower_id: user6.id, followed_id: user4.id)
# Follow.create!(follower_id: user8.id, followed_id: user4.id)

# Follow.create!(follower_id: user8.id, followed_id: user6.id)
# Follow.create!(follower_id: user8.id, followed_id: user7.id)
# Follow.create!(follower_id: user7.id, followed_id: user8.id)





photo1 = Photo.create!(description: "Earth day 2017", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511848535/earthday.png")
photo2 = Photo.create!(description: "West to UCLA", author_id: user1.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845945/westtoucla.png")
photo3 = Photo.create!(description: "City Park", author_id: user2.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845937/citypark.png")
photo4 = Photo.create!(description: "Here be dragons.", author_id: user3.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845910/herebedragons.png")
photo5 = Photo.create!(description: "Zion Canyon", author_id: user4.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845910/zionredwalls.png")
photo36 = Photo.create!(description: "Portland Dusk", author_id: user5.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511892806/portlanddusk.png")
photo6 = Photo.create!(description: "UCLA jungle", author_id: user6.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845894/uclajungle.png")
photo7 = Photo.create!(description: "For men may come and men may go, but I go on forever", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845881/tennyson.png")
photo8 = Photo.create!(description: "Icicles", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845860/icelick.png")
photo9 = Photo.create!(description: "Cold Portland Mountains", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511898158/coldmountain.png")
photo10 = Photo.create!(description: "Tree Texture", author_id: user1.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845819/itchyteeth.png")
photo11 = Photo.create!(description: "Solitude", author_id: user2.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845794/solitude.png")
photo12 = Photo.create!(description: "Babbling Brooks", author_id: user3.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845780/babblingbrook.png")
photo13 = Photo.create!(description: "Tree-made Tunnels", author_id: user4.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845764/treetunnel.png")
photo14 = Photo.create!(description: "Urban Destruction", author_id: user5.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845756/urbandestruction.png")
photo15 = Photo.create!(description: "Zion River", author_id: user6.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845745/zionriver.png")
photo16 = Photo.create!(description: "Zion Temple Walls", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845735/ziontemple.png")
photo18 = Photo.create!(description: "Late Summer Days", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845713/latesummerdays.jpg")
photo17 = Photo.create!(description: "Leaves and Shadows", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845717/shadesandshadows.jpg")
photo19 = Photo.create!(description: "California Afterglow", author_id: user1.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845693/californiaafterglow.jpg")
photo20 = Photo.create!(description: "Cotton Candy Skies", author_id: user2.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845676/cottoncandyfreewaysky.png")
photo21 = Photo.create!(description: "John Muir", author_id: user3.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845672/johnmuir.png")
photo22 = Photo.create!(description: "Bear Mountain", author_id: user4.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845668/bearmountain.png")
photo23 = Photo.create!(description: "Portland Landing", author_id: user5.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845658/portlandlanding.png")
photo24 = Photo.create!(description: "Japanese Garden", author_id: user6.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845648/japanesegarden.png")
photo25 = Photo.create!(description: "Purple Rains", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845632/walkingdownalonelyroad.png")
photo26 = Photo.create!(description: "Hydrangeas", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845622/hydrangeas.png")
photo27 = Photo.create!(description: "Marbled Tides", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845610/sdmarbledtide.png")
photo28 = Photo.create!(description: "Palace of Fine Arts", author_id: user1.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845604/finearts.png")
photo29 = Photo.create!(description: "Cliffside Hanging", author_id: user2.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845593/cliffsideend.png")
photo30 = Photo.create!(description: "Glass House", author_id: user3.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511845089/backyardgoals.png")
photo31 = Photo.create!(description: "Flying South", author_id: user4.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844999/vline.jpg")
photo32 = Photo.create!(description: "Wes Anderson", author_id: user5.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844912/wesanderson.jpg")
photo33 = Photo.create!(description: "Portland Trees", author_id: user6.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844481/portlandtrees_fqd351.png")
photo34 = Photo.create!(description: "DTLA", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844465/dtusc_nmcunc.png")
photo35 = Photo.create!(description: "SD Sunsets", author_id: demouser.id, image_url: "http://res.cloudinary.com/cdisong/image/upload/v1511844461/sdsunset_f6nbla.png")
