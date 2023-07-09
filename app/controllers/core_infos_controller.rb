# frozen_string_literal: true

class CoreInfosController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
    render json: @core_infos, each_serializer: CoreInfosIndexSerializer
  end

  def show
  end

  def create
    core_info = CoreInfo.create!(user: current_user)
  end
end
