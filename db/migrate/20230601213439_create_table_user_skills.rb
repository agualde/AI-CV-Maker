class CreateTableUserSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :user_skills, id: :uuid do |t|
      t.references :user, type: :uuid, null: false, foreign_key: true
      t.references :skill, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
