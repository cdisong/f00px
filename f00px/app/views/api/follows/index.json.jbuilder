@followers.each do |follower| 
  json.set follower.id do 
    json.partial! '/api/follows/follow', follower: follower
  end 
end 

