class CreateJobApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :job_applications do |t|
      t.date :application_date
      t.string :company
      t.string :role
      t.string :contact
      t.string :interview_status
      t.text :notes

      t.timestamps
    end
  end
end
