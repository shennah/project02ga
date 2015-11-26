class GetTinderApiController < ApplicationController

  # User this by:
  #
  # $.ajax({
  #   url: '/tinder',
  #   data: {lat: 40, lng: 35},
  #   dataType: 'json',
  #   complete: function(data) { 
  #      do something with the data here
  #   }
  # })

  def people
    require 'tinderbot'

<<<<<<< Updated upstream
    facebook_authentication_token = 'CAAGm0PX4ZCpsBAP4FsL8kUv1hYW23imB1xFAXZCfIUktpNpze4BrgrkRpMADPBa7gHQVZAifiyV1ZAMXQUx6o3jJajqHQN5FEmVtOaTDpgWC7HSoOz8NXhiFAaBaN38yFs8ZCzWgZAtkA8fK6rSyXu3ZAX51GwlFIMMzZCgDDsTkindZAcYNo9GpP2cIBJZAx44MEFKx1etp2j9gZDZD
    '
    facebook_user_id = '597886126'
=======
    facebook_authentication_token = 'CAAGm0PX4ZCpsBANNtrztE940hDYabKpulS2gHkPZBKMUhxIYu0PxnIDOK1iaKeoxe8mulqOmqphp4UexEvRUkoJaAKcZCLuQXv9LgZCTpAlA8yDwcyBmlxZALIJOjlRDbxwfDaE8bUtHbT5jRGndXB9kZAhWnY7XMUx6tWwRjsiByJ9UkbKgFZC0r0YWQcyyPeVYgCO4b5uKxwidOZCX8zFH'
    facebook_user_id = '525551894'
>>>>>>> Stashed changes
    latitude = params[:lat]
    longtitude = params[:lon]
    tinder_client = Tinderbot::Client.new
    tinder_authentication_token = tinder_client.get_authentication_token facebook_authentication_token, facebook_user_id
    tinder_client.sign_in tinder_authentication_token
    
    tinder_client.update_location "#{latitude},#{longtitude}"
    user = tinder_client.profile
    # p user
    users = tinder_client.recommended_users
    # p users
    # user_one = users.first
    # p user_one.birth_date
    # p user_one.name
    # p user_one.bio
    # p user_one.photo_urls
    # params[:lat]

    # users = [] #.... array of Tinder::Model::User objects
    response = users.map do |tinder_api_user|
      {name: tinder_api_user.name, pictures: tinder_api_user.photo_urls, age: tinder_api_user .birth_date, bio: tinder_api_user.bio, gender: tinder_api_user.gender} # add other fields
    end

    render json: response # e.g. [{name: "Greg"}, {name: "Charley"}]      render json: user

  end
end
