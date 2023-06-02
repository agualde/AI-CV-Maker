class AddMoreColumnsToCoreInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :core_infos, :title, :string
    add_column :core_infos, :last_name, :string
  end
end
