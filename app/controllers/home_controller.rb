class HomeController < ApplicationController
  def index 
    @props = {name:'she is so poopy'}.to_json
  end
end