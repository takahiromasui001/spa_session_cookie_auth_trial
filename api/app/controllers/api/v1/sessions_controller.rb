module Api
  module V1
    class SessionsController < ApplicationController
      skip_before_action :login_check, only: [:create]

      def create
        user = User.find_by(name: params[:name])&.authenticate(params[:password])

        if user.present?
          session[:user_id] = user.id
          render json: { message: "login succeed" }
        else
          render json: { message: "login failed" }, status: 401
        end
      end

      def delete
        session.delete(:user_id)
      end
    end
  end
end
