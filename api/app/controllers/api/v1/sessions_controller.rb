module Api
  module V1
    class SessionsController < ApplicationController
      skip_before_action :login_check, only: [:create]
      skip_before_action :verify_authenticity_token, only: :create
      after_action :set_csrf_token_header, only: [:create, :show]

      def show
        render json: { message: "logged in", userId: current_user.id }
      end

      def create
        user = User.find_by(name: params[:name])&.authenticate(params[:password])

        if user.present?
          session[:user_id] = user.id
          render json: { message: "login succeed", userId: user.id }
        else
          render json: { message: "login failed", userId: nil }, status: 401
        end
      end

      def delete
        session.delete(:user_id)
        render json: { message: "logout succeed" }
      end
    end
  end
end
