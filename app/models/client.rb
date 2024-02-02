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
  has_many :orders, dependent: :destroy
  # Validations
  validates :name, presence: true, length: { minimum: 2 }
  validates :address, presence: true, length: { minimum: 2 }
  validates :contact, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  # Additional validations and custom logic can be added here
end
