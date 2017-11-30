json.extract! user, :id, :username
  json.photo_ids user.photo_ids
  json.followers user.followers
  json.following user.followings


