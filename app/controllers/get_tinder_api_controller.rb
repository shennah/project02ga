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

    facebook_authentication_token = 'CAAGm0PX4ZCpsBAAZCTwHmb1sEYk26JYJkdzeLyBfTxMCO2W0sbfmyCQ5A4NuFzuinXZBvDiE5u5IrG4ZCyp4vamvJpm6XQxSr26GZCKwkY7Bw9hyfV85nwDVbKEJG7w9FZBxjJPTc1Cz9bY3shE6Hoflchl5MNCJFVcG5ZBI2IoTGndPvZA2oPVOAZARWjD3B2TNh1kVMFnEGuQZDZD
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
