# db/seeds.rb

5.times do
  Client.create!(
    name: Faker::Name.name,
    address: Faker::Address.full_address,
    contact: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email
  )
end


10.times do
  Order.create!(
    address: Faker::Address.full_address,
    client_id: Client.order("RANDOM()").first.id, # Randomly selects a client_id from existing clients
    appraisal_type: ["Residential", "Commercial", "Land"].sample, # Randomly selects an appraisal type
    is_fha_loan: [true, false].sample, # Randomly decides if it's an FHA loan or not
    primary_appraiser: Faker::Name.name,
    secondary_appraiser: Faker::Name.name,
    inspection_date: Faker::Date.forward(days: 30) # Sets an inspection date within the next 30 days
  )
end
