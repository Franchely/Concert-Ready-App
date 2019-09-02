class ApplicationController < ActionController::API
    before_action :authorized?

    def encode_token(user)
        payload = {user_id: user.id}
        JWT.encode(payload, ENV["JWT_SECRET_KEY"])
    end

    def auth_header
        request.headers["Authorization"]
    end

    def decoded_token

        if auth_header
            token = auth_header.split(" ")[1]
            begin
                JWT.decode(token, ENV["JWT_SECRET_KEY"], true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end

    end

    def current_user
        if decoded_token
            user_id = decoded_token[0]["user_id"]
            User.find(user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized?(user_id)
        token = try_get_jwt_token
        return token.present? && token["user_id"] == user_id.to_i
    end
    
    def user_who_is_logged_in
        if authenticated?
          user_id = try_get_jwt_token["user_id"]
          User.find(user_id)
        end
    end    

    def authenticated?
        try_get_jwt_token.present?
    end

    def auth_response_json(user)
        { token: make_token(user.id), username: user.username, user_id: user.id }
    end

    def tell_user_to_go_away!
        render :json => { go_away: true }, :status => :unauthorized
    end

    private

    def make_token(user_id)
      JWT.encode({ user_id: user_id }, ENV["JWT_SECRET_KEY"], 'HS256')
    end
  
    def decode_token(token_string)
      JWT.decode(token_string, ENV["JWT_SECRET_KEY"], true, { algorithm: 'HS256' })
    end
  
    def try_get_jwt_token
      token_string = request.headers["Authorization"]
      if token_string.present?
        begin
          decoded_token = decode_token(token_string)
        rescue JWT::VerificationError
          return nil
        end
        return decoded_token.first # gets the payload out of the dumb array that JWT returns
      else
        nil
      end
    end  


end
