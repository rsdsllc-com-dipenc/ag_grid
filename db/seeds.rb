# db/seeds.rb

5.times do
  Client.create!(
    name: Faker::Name.name,
    address: Faker::Address.full_address,
    contact: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email
  )
end
