class User < ApplicationRecord
  has_many :job_applications
  validates :email, uniqueness: :true
  validates :username, presence: :true
end
