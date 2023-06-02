# frozen_string_literal: true

module Api
  module V1
    class GptController < ActionController::API
      before_action :authenticate_user!

      include OpenAiConstants

      # load_and_authorize_resource

      def serialize
        data = JSON.parse(request.body.read)

        response = OpenAiService.new(MARKETING_CONSULTANT_PROMPT, data).call

        render json: { data: response }
      end
    end
  end
end