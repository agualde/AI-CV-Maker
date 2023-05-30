# frozen_string_literal: true
module Api
  module V1
    class TemporaryLinksController < ActionController::API
      before_action :decrypt_id, only: [:generate, :show]

      def generate
        base_url = 'http://localhost:3000'
        endpoint = api_v1_show_link_path(temporary_token)
    
        render json: { url: "#{base_url}#{endpoint}" }
      end

      private

      def temporary_token
        JwtHelper.encrypt_for_one_hour(params[:id])
      end

      def decrypt_id
        params[:id] = JwtHelper.decrypt(params[:token])
      end
    end
  end
end
