class CreateSuggestedCards < ActiveRecord::Migration[7.0]
  def change
    create_table :suggested_cards do |t|
      t.string :content

      t.timestamps
    end
  end
end
