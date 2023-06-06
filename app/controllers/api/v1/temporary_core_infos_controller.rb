# frozen_string_literal: true

module Api
  module V1
    class TemporaryCoreInfosController < ApplicationController
      def show
        debugger
        @token = params[:token]
      end
    end
  end
end
