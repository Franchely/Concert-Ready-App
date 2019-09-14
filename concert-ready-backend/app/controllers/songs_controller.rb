class SongsController < ApplicationController
    skip_before_action :authorized?

    def index 
        songs = Song.all.order("created_at DESC") 
        render json: songs 
    end

    def show
        song = Song.find(params[:id])
        render json: song 
    end

end
