module Api
  module V1
    class SessionsController < ApplicationController
      def create
        user = User.find_by(name: params[:name]).authenticate(params[:password])

        if user.present?
          session[:user_id] = user.id
          render json: { message: "login succeed" }
        else
          render json: { message: "login failed" }, status: 401
        end
      end

      def delete
        pp 'OK delete'
      end
    end
  end
end
