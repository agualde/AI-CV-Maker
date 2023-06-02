# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      # format.html  { redirect_to forbidden_path, alert: exception.message } 
      # format.json { render json: { error: exception.message }, status: :forbidden }
    end
  end
end
