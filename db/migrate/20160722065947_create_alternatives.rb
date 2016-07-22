class CreateAlternatives < ActiveRecord::Migration
  def change
    create_table :alternatives do |t|
      t.string :name
      t.references :user, index: true, foreign_key: true
      t.references :proposer, index: true, foreign_key: true
      t.integer :rank

      t.timestamps null: false
    end
  end
end
