class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            UserNotifierMailer.send_signup_email(@user).deliver
            render 'api/users/show'

        else
            render json: ["Invalid Credentials"], status: 422
        end 
    end

    private 

    def user_params
        params.require(:user).permit(:password, :email, :city_name, :fname, :image)
    end
end
