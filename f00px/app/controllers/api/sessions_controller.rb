class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials
  end

  def destroy
  end
end
