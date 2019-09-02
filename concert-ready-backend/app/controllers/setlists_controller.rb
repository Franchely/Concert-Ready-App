class SetlistsController < ApplicationController

    def index
        setlists = Setlist.all 
        render json: setlists
    end

    def show
        setlist = Setlist.find(params[:id])
        render json: setlist 
    end

    def create
        setlist = Setlist.create(setlist_params)
        render json: setlist
    end


    private

    def setlist_params
        params.permit(:artistName, :date, :cityName, :state, :artistMbid, :tourName, :venueName, :year)
    end

end
