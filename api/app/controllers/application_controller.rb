class ApplicationController < ActionController::API
  before_action :login_check

  def login_check
    pp 'login_check'
  end
end
