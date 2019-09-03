class SetlistSongsController < ApplicationController
    skip_before_action :authorized?

    def index
        setlist_songs = SetlistSong.all 
        render json: setlist_songs
    end

    def show
        setlist_song = SetlistSong.find(params[:id])
        render json: setlist_song
    end

    

end
