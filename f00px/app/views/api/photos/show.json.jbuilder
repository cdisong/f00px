json.partial!('api/photos/photo', photo: @photo)
json.author do 
    json.partial!('api/users/user', user: @photo.author)
end 

