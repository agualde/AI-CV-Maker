# frozen_string_literal: true
module Api
  module V1
    class CoreInfosTransactionsController < ActionController::API
      before_action :authenticate_user!
      prepend_before_action :decrypt_id, only: [:update]
      before_action :find_by_decrypted_id, only: [:update]
      authorize_resource :core_info
      
      def update
        if @core_info.update(core_info_params[:field]=> core_info_params[:data])
          render json: { status: 'success', message: 'Update successful' }, status: 200
        else
          render json: { status: 'error', message: @core_info.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def decrypt_id
        begin
          @id = JwtHelper.decrypt(params[:token])
        rescue # handle exception as needed
          # handle error case, e.g. invalid token
        end
      end

      def find_by_decrypted_id
        @core_info = CoreInfo.find(@id)
      end

      def core_info_params
        params.require(:core_infos_transaction).permit(:token, :field, :data)
      end
    end
  end
end