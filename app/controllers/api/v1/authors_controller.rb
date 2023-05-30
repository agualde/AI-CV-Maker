# frozen_string_literal: true
module Api
  module V1
    class AuthorsController < ActionController::API
      before_action :decrypt_id, only: [:show]

      def show
        @author = Author.find(@id)
        serialized_author = AuthorSerializer.new(@author).to_json
        render json: serialized_author
      end

      private

      def decrypt_id
        @id = JwtHelper.decrypt(params[:token])
      end
    end
  end
end
