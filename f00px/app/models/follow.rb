class Follow < ApplicationRecord
validates :follower, :followed_user, presence: true 
validates :follower, uniqueness: { scope: :followed_user }



belongs_to :followed_user, 
primary_key: :id, 
foreign_key: :followed_id, 
class_name: :User

belongs_to :follower, 
primary_key: :id, 
foreign_key: :follower_id, 
class_name: :User

end
