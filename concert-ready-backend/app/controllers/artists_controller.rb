class ArtistsController < ApplicationController
    skip_before_action :authorized?

    def index
        artists = Artist.all 
        render json: artists, include: [:setlists]
    end

    def show 
        artist = Artist.find(params[:id])
        render json: artist, include: [:setlists]
    end

    def create
        artist = params.permit(:artist)[:artist]
        
        if artist == "beyonce" 
            response = RestClient.get("https://api.setlist.fm/rest/1.0/search/setlists?artistMbid=859d0860-d480-4efd-970c-c05d5f1776b8&p=1", headers={"Accept": "application/json", "x-api-key": ENV["API_SECRET_KEY"]})
        else
            artist_url = artist.split(" ").join("%20")
            response = RestClient.get("https://api.setlist.fm/rest/1.0/search/setlists?artistName=#{artist_url}&p=1&sort=sortName", headers={"Accept": "application/json", "x-api-key": ENV["API_SECRET_KEY"]}) 
        end
        
        parsed_response = JSON.parse(response.body)

        artists_array = []
        parsed_response["setlist"].each do |setlist| 
            @artist = setlist["artist"]["name"]
            @artistObject = Artist.find_or_create_by(name: @artist)
            artists_array << @artistObject 
        end

        unique_array = artists_array.uniq {|artist| artist.name}

        artists = unique_array
        render json: artists 
    end


    private

    def artist_params
        params.require(:artist).permit(:name)
    end

end
