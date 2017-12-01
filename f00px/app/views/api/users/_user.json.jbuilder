json.extract! user, :id, :username, :description, :profile_img_url
  json.photo_ids user.photos.pluck(:id)
  json.followers user.followers.pluck(:id)
  json.following user.followed_users.pluck(:id)


