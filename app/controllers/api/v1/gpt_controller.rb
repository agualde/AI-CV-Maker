# frozen_string_literal: true

module Api
  module V1
    class GptController < ActionController::API
      before_action :authenticate_user!

      def serialize
        data = JSON.parse(request.body.read)
        prompt_key = data.keys[0]
        data = data[prompt_key]
        response = OpenAiService.new(prompt_key, data).call

        render json: { data: response }
      end
    end
  end
end