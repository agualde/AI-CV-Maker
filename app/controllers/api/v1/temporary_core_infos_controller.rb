# frozen_string_literal: true

module Api
  module V1
    class TemporaryCoreInfosController < ApplicationController
      def show
        @token = params[:token]
      end
    end
  end
end
