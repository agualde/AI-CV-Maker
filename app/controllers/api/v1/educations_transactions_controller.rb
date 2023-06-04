# frozen_string_literal: true

module Api
  module V1
    class EducationsTransactionsController < ActionController::API
      before_action :decrypt_id, only: [:update]
      before_action :authenticate_user!

      DICTIONARY = {
        header: :institution, 
        sub_header: :degree,
        description: :description
      }

      def update
        core_info = CoreInfo.find(@id)
        experience = core_info.educations.find(payload['resource_id'])
        experience.update!({field => payload['data']})
        return render json: { status: 'success', message: 'Update successful' }, status: 200
      end

      private

      def decrypt_id
        @id = JwtHelper.decrypt(params[:token])
      end

      def payload
        params['data']
      end

      def field
        DICTIONARY[params['field'].to_sym]
      end
    end
  end
end
