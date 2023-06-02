class CreateTableExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences, id: :uuid do |t|
      t.string :role
      t.string :duration_start
      t.string :duration_end
      t.string :company_name
      t.string :description
      t.references :user, null: false, type: :uuid, foreign_key: true, index: true

      t.timestamps
    end
  end
end
