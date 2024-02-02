json.array! @orders do |order|
  json.extract! order, :id, :address, :appraisal_type, :is_fha_loan, :primary_appraiser, :secondary_appraiser, :inspection_date
  json.client order.client.name
end
