class AlternativesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    respond_with user.alternatives
  end
  
  def create
    respond_with Alternative.create(alternative_params.merge(user_id: params[:user_id]))
  end
  
  def destroy
    alternative = Alternative.find(params[:id])
    alternative.destroy
    respond_with alternative
  end
  
  private
  
  def alternative_params
      params.require(:alternative).permit(:name, :user_id)
  end
end