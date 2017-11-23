class Api::UsersController < ApplicationController
  def index
   @users = User.all 
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render :show 
    else 
      flash.now[:errors] = @user.errors 
      render json: @user.errors.full_messages, status: 422
    end 
  end

  def destroy
    @user = User.find(params[:id]) 
    if @user 
      @user.destroy 
      render :show 
    else 
      flash.now[:errors] = ['No User To Destroy']
  end

  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_parms)
      render :show 
    else 
      render json: @user.errors.full_messages
    end 
  end
  
  private 
  def user_params 
    params.require(:user).permit(:username, :pasword)
  end 
end





