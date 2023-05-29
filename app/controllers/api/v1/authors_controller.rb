# frozen_string_literal: true
module Api
  module V1
    class AuthorsController < ActionController::API
      # before_action :authenticate_user!
      # load_and_authorize_resource

      # GET /authors/1 or /authors/1.json
      def show
        id = JwtHelper.decrypt(params[:token])
        author = Author.find(id)
        serialized_author = AuthorSerializer.new(author).to_json

        render json: serialized_author
      end
    end
  end
end
