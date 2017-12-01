class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user 
    @user = User.find(params[:user_id])
    if @follow.save 
      render "api/users/show"
    else 
      render json: @follow.errors.full_messages, status: 422
    end 
  end

  def destroy
    @follow = Follow.find_by(
      following_id: params[:user_id], 
      follower_id: current_user.id)
    @follow.destroy! 
    @user = User.find(params[:user_id]) 
    render "api/users/show"
  end
  private 
  def follower_params 
    params.require(:follow).permit(:follower_id, :following_id)
  end 
end
