class ArtistsController < ApplicationController

    def index
        artists = Artist.all 
        render json: artists 
    end

    def show 
        artist = Artist.find(params[:id])
        render json: artist 
    end

    def create
        artist = Artist.create(artist_params)
        render json: artist 
    end


    private

    def artist_params
        params.require(:artist).permit(:name, :mbid, :tmid, :sortName)
    end

end
