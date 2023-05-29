# frozen_string_literal: true

class AuthorsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
    @authors = current_user.authors
  end

  # GET /authors/1 or /authors/1.json
  def show
    @token = params[:token]
  end

  private

  # Only allow a list of trusted parameters through.
  def author_params
    params.require(:author).permit(:name, :age, :country)
  end
end
