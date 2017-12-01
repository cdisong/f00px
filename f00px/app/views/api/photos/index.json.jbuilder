@photos.each do |photo| 
  json.set! photo.id do  
    json.extract! photo, :id, :image_url, :description, :author_id
    json.author do 
      json.username photo.author.username 
    end
  end
end 