class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      flash.now[:errors] = 'Invalid Credentials'
    else 
      login(@user)
      render 'api/users/show';
    end 
  end

  def new 
    render :new
  end 


  def destroy
    logout
    render json: { message: 'Logged Out'}
  end
end
