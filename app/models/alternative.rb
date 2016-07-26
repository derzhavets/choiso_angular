class Alternative < ActiveRecord::Base
  belongs_to :user
  belongs_to :proposer, :class_name => "User"
  
  def self.proposed_by(proposer)
    where(proposer_id: proposer.id)
  end
end
