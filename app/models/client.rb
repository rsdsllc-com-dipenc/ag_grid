# == Schema Information
#
# Table name: clients
#
#  id         :integer          not null, primary key
#  address    :string
#  contact    :string
#  email      :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Client < ApplicationRecord
  # Validations
  validates :name, presence: true, length: { minimum: 2 }
  validates :address, presence: true
  validates :contact, presence: true, numericality: true, length: { minimum: 10, maximum: 15 }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  # Additional validations and custom logic can be added here
end
