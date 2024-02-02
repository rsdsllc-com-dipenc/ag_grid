json.array! @clients do |client|
  json.extract! client, :id, :name, :address, :contact, :email
  json.orders_count client.orders.count
end
