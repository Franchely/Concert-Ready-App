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
        
        @artist = Artist.find_by(name: params[:artist])
        artist_url = @artist.mbid 

        if  Setlist.exists?(artist: Artist.find(@artist.id))
        render json: Setlist.where(artist: Artist.find(@artist.id))

        else
            
            response = RestClient.get("https://api.setlist.fm/rest/1.0/search/setlists?artistMbid=#{artist_url}&p=1", headers={"Accept": "application/json", "x-api-key": ENV["API_SECRET_KEY"]}) 
            parsed_response = JSON.parse(response.body)


            parsed_response["setlist"].each do |setlist| 
                artistMbid = setlist["artist"]["mbid"]
                venue = setlist["venue"]["name"]
                city = setlist["venue"]["city"]["name"]
                country = setlist["venue"]["city"]["country"]["name"]
                date = setlist["eventDate"]
                
                # create setlist
                setlistObject = Setlist.find_or_create_by(artist: Artist.find_by(mbid: artistMbid), venue: venue, city: city, country: country, date: date)
            
            
                if setlist["sets"]["set"].length == 0
                    next 
                else 
                        setlist["sets"]["set"].first["song"].each do |songObject|
                            songTitle = Song.create(name: songObject["name"])
                            SetlistSong.create(setlist: setlistObject, song: songTitle, song_name: songObject["name"])
                        end 

                        if setlist["sets"]["set"].second["song"]
                            setlist["sets"]["set"].second["song"].each do |songObject|
                            songTitle = Song.create(name: songObject["name"])
                            SetlistSong.create(setlist: setlistObject, song: songTitle, song_name: songObject["name"])
                            
                        elsif setlist["sets"]["set"].third["song"]
                            setlist["sets"]["set"].third["song"].each do |songObject|
                                songTitle = Song.create(name: songObject["name"])
                                SetlistSong.create(setlist: setlistObject, song: songTitle, song_name: songObject["name"])
                            else 
                                next   
                        end 
                end
            end 
            setlists = Setlist.where(artist: Artist.find_by(mbid: artist_url))
            render json: setlists, include: [:setlist_songs]
        end
    end


    private

    def setlist_params
        params.permit(:artist, :date, :city, :country, :artist, :venue)
    end

end
