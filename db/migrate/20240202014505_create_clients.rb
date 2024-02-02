class CreateClients < ActiveRecord::Migration[7.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :address
      t.string :contact
      t.string :email

      t.timestamps
    end
  end
end
