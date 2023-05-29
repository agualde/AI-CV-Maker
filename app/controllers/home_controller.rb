# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @props = { name: 'she is so poopy' }.to_json
  end

  def forbidden
  end
end
