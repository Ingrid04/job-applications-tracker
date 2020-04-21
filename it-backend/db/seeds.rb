# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
require "date"
user = User.create(username: "Sonia", email: "sonia@email.com")

job = user.job_applications.create(application_date: Date.new(2020, 4, 15), company: "Start Up", role: "Software Engineer", contact: "Mary P", interview_status: "Interview in 2 days", notes: "Face to face interview")
