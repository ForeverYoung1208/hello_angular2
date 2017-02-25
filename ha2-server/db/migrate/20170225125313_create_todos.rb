class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :caption
      t.boolean :isDone
      t.decimal :duration

      t.timestamps
    end
  end
end
