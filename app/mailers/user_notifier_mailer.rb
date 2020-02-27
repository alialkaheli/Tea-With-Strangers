class UserNotifierMailer < ApplicationMailer

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_signup_email(user)
    @user = user
    mail( :from => 'hoopwithstrangers@no-reply.com',
        :to => 'mrodriguez@appacademy.io',
    :subject => 'Thanks for signing up for HoopWithStrangers!' )
  end
end