class SessionsController < ApplicationController
    # POST /login
    def create
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: "Invalid email or password"}
        end
    end

    # DELETE /logout
    def destroy
        session.delete :user_id
        head :no_content
    end
end
