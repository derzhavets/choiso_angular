class Proposal < ActiveRecord::Base
  def self.columns() @columns ||= []; end

  def self.column(name, sql_type = nil, default = nil, null = true)
    type = "ActiveRecord::Type::#{sql_type.to_s.camelize}".constantize.new
    columns << ActiveRecord::ConnectionAdapters::Column.new(name.to_s, default, type, null)
  end

  column :user_id, :integer
  column :proposer_id, :integer
  column :resource, :string

  belongs_to :user
  belongs_to :proposer, class_name: "User"
end
