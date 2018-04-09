class Api::PhotosController < ApplicationController
  
  
  def create
    @photo = Photo.new(photo_params)
    @photo.author = current_user
    if @photo.save 
      render "api/photos/show"
    else 
      render json: @photo.errors.full_messages, status: 422
    end  
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo && @photo.update_attributes(photo_params)
      render :show 
    else 
      render json: @photo.errors.full_messages, status: 400
    end 
  end

  def dashboard 
    @photos = Photo.dashboard(current_user.id) 
    @users = User.all
    render 'api/photos/dashboard'
  end 

  def index
    @photos = Photo.find_by_user_id(params[:user_id])
    render 'api/photos/index'
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy 
    @photo = Photo.find(params[:id])
    if @photo 
      @photo.destroy
      render :show 
    else 
      render json: ['No photo to destroy'], status: 404
    end 
  end

  private 
  def photo_params
    params.require(:photo).permit(:image_url, :description)
  end 
end
