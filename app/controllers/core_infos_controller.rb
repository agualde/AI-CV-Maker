# frozen_string_literal: true

class CoreInfosController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
  end

  def show
    core_info = CoreInfo.find_or_create_by(user: current_user)
    encrypted_id = core_info.id
    @token = JwtHelper.encrypt(encrypted_id)
  end
end
