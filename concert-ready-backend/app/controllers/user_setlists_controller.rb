class UserSetlistsController < ApplicationController

    def index
        setlists = UserSetlist.all 
        render json: setlists 
    end

    def create
        byebug

        setlist = Setlist.find(params[:id])
        user = User.find(params[:id])
        usersetlist = UserSetlist.create(setlist: setlist, user: user)

        render json: usersetlist
    end

    def destroy
        setlist = UserSetlist.find(params[:id])
        setlist.destroy

        render json: setlist 
    end

end
