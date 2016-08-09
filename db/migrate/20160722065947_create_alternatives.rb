class CreateAlternatives < ActiveRecord::Migration
  def change
    create_table :alternatives do |t|
      t.string :name
      t.references :user, index: true, foreign_key: true
      t.integer :proposer_id, index: true, foreign_key: true
      t.integer :rank

      t.timestamps null: false
    end
  end
end
