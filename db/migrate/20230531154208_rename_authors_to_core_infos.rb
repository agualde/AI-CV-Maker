class RenameAuthorsToCoreInfos < ActiveRecord::Migration[7.0]
  def change
    rename_table :authors, :core_infos
  end
end
