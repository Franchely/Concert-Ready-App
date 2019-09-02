class UsersController < ApplicationController
    skip_before_action :authorized?, only: [:create, :index]

    def index
        users = User.all 
        render json: users 
    end

    def create
        user = User.create(user_params)
        if user.valid?
            token = encode_token(user)
            render json: { user: user, token: token} 
        else
            render json: { errors: user.errors.full_messages }
        end
    end

    def profile
        render json: { user: current_user}, status: :accepted
    end


    private

    def user_params
      params.permit(:username, :password, :location, :bio)
    end

end
