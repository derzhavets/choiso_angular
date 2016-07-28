class AlternativesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    if params[:proposer_id]
      proposer = User.find(params[:proposer_id])
      respond_with user.alternatives.proposed_by(proposer)
    else
      respond_with user.alternatives.where(proposer: user)
    end
  end
  
  def create
    alternative = Alternative.create(alternative_params.merge(user_id: params[:user_id]))
    respond_with alternative
  end
  
  def destroy
    alternative = Alternative.find(params[:id])
    alternative.destroy
    respond_with alternative
  end
  
  def show
    respond_with Alternative.find(params[:id])
  end
  
  private
  
  def alternative_params
      params.require(:alternative).permit(:name, :proposer_id)
  end
end