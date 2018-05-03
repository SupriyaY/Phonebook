class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :cell_number
      t.string :work_number
      t.string :home_number
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
