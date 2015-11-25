  _.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g
};


$(document).ready(function(){

	// var tinderData = $.ajax({
	// 	url: '/tinder',
	// 	dataType: 'json',
	// 	complete: function(data) {
	// 		console.log(data);
	// 	}
	// });

	var router = new app.Router();
	Backbone.history.start();
	// need to fetch data from database to implement
	// app.fetchUsers = new app.Users();
	// app.fetchUsers.fetch();
	// app.fetchPosts = new app.Posts();
	// app.fetchPosts.fetch();
	console.log('test before insert')

});


//// SHENNAHS STUFF

var map;
var marker;
var markers = [];
var latitude;
var longitude;
var tinderData;


function initMap() {

  // initialise map, sets starting lat/lng, zoom
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });


  // map click event listener
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng); // calls place marker function
    latitude  = event.latLng.lat(); // stores lat and lng var on click
    longitude = event.latLng.lng();
    console.log("Latitude " + latitude + ", Longitude " + longitude)

    //sends a request to rails to get data from tiner
	tinderData = $.ajax({
		url: '/tinder',
		dataType: 'json',
		data: {lat: latitude.toFixed(5), lon: longitude.toFixed(5)},
		complete: function(data) {
			console.log(data);
			window.location = window.location.pathname + "#marker";
			resultsView.render();
		}
	//sets the URL to use backbone
	});
  });


  // undo button
  $('.undo').on('click', function(){
    markers.pop(marker);
    marker.setMap(null);
  });
} // initMap


function placeMarker(location) {
  // places marker - sets options
  if (marker) {
    marker.setMap(null);
  }

  marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: location, 
      map: map,
      draggable: true,
  });
  markers.push(marker);


  // adds info box with content to dropped marker 
  var infowindow = new google.maps.InfoWindow({
    content: "wut u lookin at m8"
  });

  // open info on double click
  marker.addListener('dblclick', function() {
    infowindow.open(map, this, marker);
  });

  google.maps.event.addListener(marker, 'dragend', function(e){
      // document.getElementById('testing').innerHTML = '<p>Marker dropped: Current Lat: ' + e.latLng.lat().toFixed(3) + ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>';
    latitude  = e.latLng.lat(); // stores lat and lng var on click
    longitude = e.latLng.lng();
    console.log("New Latitude " + latitude + ", New Longitude " + longitude)
  });

  

 //requests rails to get data from tinder and return it back.
  // google.maps.event.addListener(marker, 'dragstart', function(e){
  //     document.getElementById('testing').innerHTML = '<p>Currently dragging marker...</p>';
  // });

}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function deleteMarkers() {
  setMapOnAll(null);
  markers = [];
}


