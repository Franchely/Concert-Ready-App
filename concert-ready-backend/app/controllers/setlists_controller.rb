class SetlistsController < ApplicationController
    skip_before_action :authorized?
    require 'rest-client'
   

    def index
        setlists = Setlist.all
        render json: setlists, include: [:setlist_songs]
    end

    def show
        setlists = Setlist.where(artist: params[:artist])
        render json: setlists, include: [:setlist_songs]
    end

    def create
        SetlistSong.destroy_all
        Setlist.destroy_all
        Song.destroy_all
       
        
        artist = params.permit(:artist)[:artist]
        artist_url = artist.split(" ").join("%20")
        response = RestClient.get("https://api.setlist.fm/rest/1.0/search/setlists?artistName=#{artist_url}&p=1", headers={"Accept": "application/json", "x-api-key": ENV["API_SECRET_KEY"]}) 
        parsed_response = JSON.parse(response.body)

        parsed_response["setlist"].each do |setlist| 
            artist = setlist["artist"]["name"]
            venue = setlist["venue"]["name"]
            city = setlist["venue"]["city"]["name"]
            country = setlist["venue"]["city"]["country"]["name"]
            date = setlist["eventDate"]

            # # create artist
            # @artistObject = Artist.find_or_create_by(name: artist)
            
            # create setlist
            setlistObject = Setlist.find_or_create_by(artist: @artistObject, venue: venue, city: city, country: country, date: date)
           
            # iterate through songs
            if setlist["sets"]["set"].length == 0
                next 
            else 
                    setlist["sets"]["set"].first["song"].each do |songObject|
                        songTitle = Song.create(name: songObject["name"])
                        SetlistSong.create(setlist: setlistObject, song: songTitle)
                    end 
            end
        end 
        setlists = Setlist.all
        render json: setlists, include: [:setlist_songs]
    end


    private

    def setlist_params
        params.permit(:artist, :date, :city, :country, :artist, :venue)
    end

end
