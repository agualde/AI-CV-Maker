class AddColumnsToCoreInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :core_infos, :about_text, :string
  end
end
