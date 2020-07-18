module Api
  module V1
    class SessionsController < ApplicationController
      def create
        pp 'OK create'
      end

      def delete
        pp 'OK delete'
      end
    end
  end
end
