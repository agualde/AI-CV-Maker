class CreateEducations < ActiveRecord::Migration[7.0]
  def change
    create_table :educations, id: :uuid do |t|
      t.string :institution
      t.string :degree
      t.string :description
      t.references :core_info, type: :uuid, null: false, foreign_key: true
      t.datetime :duration_start
      t.datetime :duration_end

      t.timestamps
    end
  end
end
