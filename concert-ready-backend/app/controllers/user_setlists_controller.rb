class UserSetlistsController < ApplicationController
    skip_before_action :authorized?

    def index
        usersetlists = UserSetlist.all.order("created_at DESC")
        render json: usersetlists 
    end

    def create
        
        setlist = Setlist.find(params.permit(:setlistId)[:setlistId])
        user = User.find(params.permit(:userId)[:userId])
        
        usersetlist = UserSetlist.create(setlist_id: setlist.id, user_id: user.id)

        render json: usersetlist
    end

    def destroy
        setlist = UserSetlist.find(params[:id])
        setlist.destroy

        render json: setlist 
    end

end
