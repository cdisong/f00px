class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true 
  validates :username, uniqueness: true 
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :photos,
  primary_key: :id, 
  foreign_key: :author_id, 
  class_name: :Photo 


  has_many :followers_following, 
  primary_key: :id, 
  foreign_key: :followed_id, 
  class_name: :Follow 

  has_many :users_currently_following,
  primary_key: :id, 
  foreign_key: :follower_id, 
  class_name: :Follow 

  has_many :followers, 
  through: :followers_following, 
  source: :follower 

  has_many :followed_users, 
  through: :users_currently_following, 
  source: :followed_user 


  attr_reader :password 

  after_initialize :ensure_session_token 
  
  def photo_ids
    arr = [] 
    self.photos.each do |photo|
      arr << photo.id 
    end 
    return arr
  end 

  # def followers 
  #   arr = [] 
  #   self.users_currently_following.each do |follower| 
  #     arr << follower.id 
  #   end 
  #   return arr 
  # end 

  # def followings 
  #   arr = [] 
  #   self.followers_following.each do |following| 
  #     arr << following.id 
  #   end 
  #   return arr 
  # end 




  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user 
    @user.is_password?(password) ? @user : nil 
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
