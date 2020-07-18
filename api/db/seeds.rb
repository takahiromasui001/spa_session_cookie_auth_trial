# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company1 = Company.create(name: 'company1')
company2 = Company.create(name: 'company2')
User.create(name: 'user1', email: 'user1@example.com', password: '1111', password_confirmation: '1111', company_id: company1.id)
User.create(name: 'user2', email: 'user2@example.com', password: '1111', password_confirmation: '1111', company_id: company1.id)
User.create(name: 'user3', email: 'user3@example.com', password: '1111', password_confirmation: '1111', company_id: company2.id)
