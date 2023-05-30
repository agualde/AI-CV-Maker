# frozen_string_literal: true

class AuthorsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
  end

  # GET /authors/1 or /authors/1.json
  def show
    @token = params[:token]
  end
end
