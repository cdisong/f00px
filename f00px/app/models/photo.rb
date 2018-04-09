class Photo < ApplicationRecord
  validates :description, :image_url, :author_id, presence: true 

  belongs_to :author, 
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User 

    def self.find_by_user_id(id)
      Photo.select(:id, :description, :image_url, :author_id) 
        .where(author_id: :id)
    end 

    def self.dashboard(id)
      Photo 
        .joins("INNER JOIN follows ON photos.author_id = follows.followed_id")
        .where("follows.follower_id = :id", id: id) 
        .limit(40)
    end 
end


