# == Schema Information
#
# Table name: orders
#
#  id                  :integer          not null, primary key
#  address             :string
#  appraisal_type      :string
#  inspection_date     :datetime
#  is_fha_loan         :boolean
#  primary_appraiser   :string
#  secondary_appraiser :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  client_id           :integer          not null
#
# Indexes
#
#  index_orders_on_client_id  (client_id)
#
# Foreign Keys
#
#  client_id  (client_id => clients.id)
#
class Order < ApplicationRecord
  # Associations
  belongs_to :client

  # Validations
  validates :address, presence: true
  validates :client_id, presence: true
  validates :appraisal_type, presence: true, inclusion: { in: %w[Residential Commercial Land], message: "%<value>s is not a valid appraisal type" }
  validates :is_fha_loan, inclusion: { in: [true, false] }
  validates :primary_appraiser, presence: true
  validates :secondary_appraiser, presence: true
  validate :inspection_date_cannot_be_in_the_past

  # Custom validation method for inspection_date
  def inspection_date_cannot_be_in_the_past
    return unless inspection_date.present? && inspection_date < Date.today

    errors.add(:inspection_date, "can't be in the past")
  end
end
