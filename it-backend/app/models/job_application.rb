class JobApplication < ApplicationRecord
  belongs_to :user
  validates :application_date, :company, :role, :contact, :interview_status, presence: true

  # def self.search()
  #   if search
  #     job_search = JobApplication.find_by(name: search)
  #   else
  #     @job_applications = JobApplication.all
  #   end
  # end
end
