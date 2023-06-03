# frozen_string_literal: true

class CoreInfo < ApplicationRecord
  belongs_to :user
  has_many :experiences
  has_many :educations
end
