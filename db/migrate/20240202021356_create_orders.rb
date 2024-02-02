class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.string :address
      t.references :client, null: false, foreign_key: true
      t.string :appraisal_type
      t.boolean :is_fha_loan
      t.string :primary_appraiser
      t.string :secondary_appraiser
      t.datetime :inspection_date

      t.timestamps
    end
  end
end
