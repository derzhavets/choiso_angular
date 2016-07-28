class ProposalsController < ApplicationController
  def index
    user = User.find(params[:id])
    resource = params[:resource_name]
    respond_with user.proposals_for(resource)
  end
end