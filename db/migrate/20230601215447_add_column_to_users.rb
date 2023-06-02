class AddColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :core_infos, :image_url, :string
  end
end
