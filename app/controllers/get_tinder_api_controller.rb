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

    facebook_authentication_token = 'CAAGm0PX4ZCpsBALgkO4xgFf5t0gGX07U7IacZCMGHJEv4OKlW425B4pVzJhJOPgrfYIEZCPX9ViMQBT3Dra2WZCMcNdgnoK0yX8FIW8oc5VjXHnTbMqSHVn4MACZBPzIYq1bgNgyo2itvbJj55vrYgbk6AlOBnmJPd7nUkbyYEYGGhKg0g5hZC9pfFG6lxnSFgQtdSivEnxZCFTdP7Ewh3f
    '
    facebook_user_id = '597886126'
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
