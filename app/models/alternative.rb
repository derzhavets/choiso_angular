class Alternative < ActiveRecord::Base
  belongs_to :user
  belongs_to :proposer, :class_name => "User"
end
