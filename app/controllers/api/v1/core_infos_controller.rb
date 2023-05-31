# frozen_string_literal: true
module Api
  module V1
    class CoreInfosController < ActionController::API
      before_action :decrypt_id, only: [:show]

      def show
        @core_info = CoreInfo.find(@id)
        serialized_core_info = CoreInfoSerializer.new(@core_info).to_json
        render json: serialized_core_info
      end

      private

      def decrypt_id
        @id = JwtHelper.decrypt(params[:token])
      end
    end
  end
end
