# frozen_string_literal: true

module Api
  module V1
    class ExperiencesTransactionsController < ActionController::API
      before_action :decrypt_id, only: [:update]
      before_action :authenticate_user!
      authorize_resource :core_info
      authorize_resource :experience

      DICTIONARY = {
        header: :company_name, 
        sub_header: :role,
        description: :description
      }

      def update
        core_info = CoreInfo.find(@id)
        experience = core_info.experiences.find(payload['resource_id'])
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
