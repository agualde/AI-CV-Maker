# frozen_string_literal: true
module Api
  module V1
    class CoreInfosTransactionsController < ActionController::API
      before_action :decrypt_id, only: [:update]
      before_action :authenticate_user!
      # load_and_authorize_resource

      def update
        core_info = CoreInfo.find(@id)
        core_info.update!({params['field']=> params['data']})
        return render json: { status: 'success', message: 'Update successful' }, status: 200
      end

      private

      def decrypt_id
        @id = JwtHelper.decrypt(params[:token])
      end
    end
  end
end
