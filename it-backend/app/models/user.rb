class User < ApplicationRecord
  has_many :job_applications
  validates :email, uniqueness: :true
end
