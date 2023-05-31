class ChangePrimaryKeyToUuidForUsers < ActiveRecord::Migration[7.0]
  def change
    remove_reference :core_infos, :user, foreign_key: true
    add_reference :core_infos, :user, type: :integer, index: true
    add_column :users, :uuid, :uuid, default: "gen_random_uuid()", null: false
    rename_column :users, :id, :old_id
    rename_column :users, :uuid, :id
    execute "ALTER TABLE users DROP COLUMN old_id"
    execute "ALTER TABLE users ADD PRIMARY KEY (id)"
  end
end
