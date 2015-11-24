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

  # def people
  #   require 'tinderbot'
  #   facebook_authentication_token = 'CAAGm0PX4ZCpsBAJ92GKuZBd58d3Dl1gqZBpmnFgIEwLsN6V0MNYFVoTiM6yblDQgnBheoaVAfgc5tQbJnuuPujIIHZBqAZBi2CPfL0PI6jAhigeHt9TgA6lbPW5PPqjHQF2v5zIBj5hJNL3RZB2q9ySbGygI8iHDy0x7vA8pLEJfZA3yxsLdjEIt5svYsWmKZAPtKBZBjyyD7kSm1ENbTsVNB
  #   '
  #   facebook_user_id = '525551894'

  #   tinder_client = Tinderbot::Client.new
  #   tinder_authentication_token = tinder_client.get_authentication_token facebook_authentication_token, facebook_user_id
  #   tinder_client.sign_in tinder_authentication_token
  #   tinder_client.update_location '40.7313029,-73.9884189'

  #   # user = tinder_client.profile
  #   # p user
  #   users = tinder_client.recommended_users
  #   # p users
  #   # user_one = users.first
  #   # p user_one.birth_date
  #   # p user_one.name
  #   # p user_one.bio
  #   # p user_one.photo_urls


  #   # params[:lat]

  #   # users = [] #.... array of Tinder::Model::User objects
  #   response = users.map do |tinder_api_user|
  #     {name: tinder_api_user.name, pictures: tinder_api_user.photo_urls, age: tinder_api_user .birth_date, bio: tinder_api_user.bio, gender: tinder_api_user.gender} # add other fields
  #   end

  #   render json: response # e.g. [{name: "Greg"}, {name: "Charley"}]
  # end
end
