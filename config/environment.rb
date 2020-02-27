# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.key_format camelize: :lower

ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey',
  :password => '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',
  :domain => 'hoop-with-strangers.herokuapp.com',
  :address => 'smtp.sendgrid.net',
  :port => 25,
  :authentication => :plain,
  :enable_starttls_auto => true