class AuthController < ApplicationController
    skip_before_action :authorized?

    def create
        user = User.find_by(username: user_login_params[:username])
        if user && user.authenticate(user_login_params[:password])
            token = encode_token(user)
            render json: {user: user, jwt: token}
        else
            render json: { message: 'Invalid username or password' }
        end
    end

    def persist
        if authenticated?
          render json: auth_response_json(user_who_is_logged_in)
        else
          tell_user_to_go_away!
        end
    end

    private 

    def user_login_params
        params.permit(:username, :password)
    end

end
