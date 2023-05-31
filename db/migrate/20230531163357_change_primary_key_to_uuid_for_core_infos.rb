class ChangePrimaryKeyToUuidForCoreInfos < ActiveRecord::Migration[7.0]
  def change
    add_column :core_infos, :uuid, :uuid, default: "gen_random_uuid()", null: false
    rename_column :core_infos, :id, :old_id
    rename_column :core_infos, :uuid, :id
    execute "ALTER TABLE core_infos DROP COLUMN old_id"
    execute "ALTER TABLE core_infos ADD PRIMARY KEY (id)"
  end
end
