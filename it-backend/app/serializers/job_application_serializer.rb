class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :application_date, :company, :role, :contact, :interview_status, :notes
  belongs_to :user
end
