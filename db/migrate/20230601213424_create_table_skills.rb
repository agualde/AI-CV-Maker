class CreateTableSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills, id: :uuid do |t|
      t.string :name

      t.timestamps
    end
  end
end
