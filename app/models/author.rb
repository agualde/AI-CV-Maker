# frozen_string_literal: true

class Author < ApplicationRecord
  belongs_to :user
end
