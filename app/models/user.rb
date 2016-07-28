class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :alternatives
  
  def proposals_for(resource)
    content = self.send(resource.to_sym).where.not(proposer: self)
    proposers = content.map { |cont| cont.proposer if cont.proposer }
    
    output = []
    
    proposers.uniq.map do |proposer|
      output.push({
        proposer: proposer.full_name,
        proposals: content.where(proposer: proposer).map { |attr| attr.name }   
      })
    end
    
    return output
  end
  
  def full_name
    return "#{first_name} #{last_name}".strip if (first_name || last_name)
    "Anonymous"
  end
  
end
