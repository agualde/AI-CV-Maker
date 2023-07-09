# frozen_string_literal: true

class CoreInfo < ApplicationRecord
  belongs_to :user
  has_many :experiences, dependent: :destroy
  has_many :educations, dependent: :destroy

  after_create :fill_page

  default_scope { order(updated_at: :desc) }

  def fill_page
    self.experiences.create
    self.educations.create
  end
end
