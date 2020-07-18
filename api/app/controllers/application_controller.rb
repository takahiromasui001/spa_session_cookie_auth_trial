class ApplicationController < ActionController::API
  before_action :login_check

  def login_check
    if current_user.blank?
      render json: { message: "unauthorized" }, status: 401
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
