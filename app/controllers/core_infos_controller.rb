# frozen_string_literal: true

class CoreInfosController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
  end

  def show
    byebug
    encrypted_id = params[:id]
    @token = JwtHelper.encrypt(encrypted_id)
  end
end
