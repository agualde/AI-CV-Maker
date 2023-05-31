class ChangeForeignKeyToUuidForCoreInfos < ActiveRecord::Migration[7.0]
  def change
    remove_column :core_infos, :user_id
    add_column :core_infos, :user_id, :uuid
    add_foreign_key :core_infos, :users, column: :user_id
    remove_column :core_infos, :user_id
    add_column :core_infos, :user_id, :uuid
  end
end
