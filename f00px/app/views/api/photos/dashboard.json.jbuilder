# @photos.each do |photo| 
#     json.set! photo.id do 
#         json.partial! "api/photos/photo", photo: photo 
#         json.username photo.author.username 
#         json.profile_img_url photo.author.profile_img_url
#     end 
# end 

@photos.each do |photo| 
    json.set! photo.id do  
      json.extract! photo, :id, :image_url, :description, :author_id
      json.author do 
        json.username photo.author.username 
      end
    end
  end 

