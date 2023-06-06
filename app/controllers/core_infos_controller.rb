# frozen_string_literal: true

class CoreInfosController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
    render json: @core_infos, each_serializer: CoreInfosIndexSerializer
  end

  def show
    core_info = current_user.core_infos.last
    id = core_info.id
    @token = JwtHelper.encrypt(id)
  end
end
