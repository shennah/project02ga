  _.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g
};


$(document).ready(function(){
	app.fetchUsers = new app.Users();
	app.fetchUsers.fetch({
    complete: function() {
      app.fetchMatchs = new app.Matchs();
      app.fetchMatchs.fetch({
        complete :function() {
          app.router = new app.Router();
          Backbone.history.start();
        }
      });
    }
  });


});



//// SHENNAHS TUFF

var map;
var marker;
var markers = [];
var latitude;
var longitude;
var tinderData;
var postCode;

var incomeJson= $.getJSON("/average-income.json", function(data) {
  console.log(data);
    // data is a JavaScript object now. Handle it as such
  });

function initMap() {
   var tinderRoadMapType = new google.maps.StyledMapType([
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#F2F2F2"
            }
          ]
      },

      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#62D995"
            }
        ]
    },

      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {hue: '#ff0022'},
          {saturation: 60},
          {lightness: -20}
        ]
      }, {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
          {hue: '#F2C063'},
          {lightness: -40},
          {visibility: 'simplified'},
          {saturation: 30}
        ]
      }, {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
          {hue: '#F2C063'},
          {saturation: 50},
          {gamma: 0.7},
          {visibility: 'simplified'}
        ]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {color: '#6FBFF2'}
        ]
      }, {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {visibility: 'on'},
          {color: '#F2C063'}
        ]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [
          {hue: '#0022ff'},
          {saturation: 50},
          {lightness: -10},
          {gamma: 0.90}
        ]
      }, {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {hue: '#F2C063'},
          {visibility: 'on'},
          {lightness: -70}
        ]
      }
    ], {name: 'Tinder Road Map'});

  // initialise map, sets starting lat/lng, zoom
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    // mapTypeId: google.maps.MapTypeId.StyledMapType,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tinderroadmap']
    }
  });

  map.mapTypes.set('tinderroadmap', tinderRoadMapType);
  map.setMapTypeId('tinderroadmap');

  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  $('#loading').hide();

  // map click event listener
  google.maps.event.addListener(map, 'click', function(event) {
    $('#goldminer, .blurb, .blurb2, .match-info, .photo').fadeOut(function(){
      $('#loading').fadeIn("slow");
    });
    // $('#loading').show();
    placeMarker(event.latLng); // calls place marker function
    latitude  = event.latLng.lat(); // stores lat and lng var on click
    longitude = event.latLng.lng();
    console.log("Latitude " + latitude + ", Longitude " + longitude)
    //find post code of marker
    function findAddress(){
      geocoder.geocode({'latLng': event.latLng}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK) {
          var address = results[0].address_components;
          console.log(address)
          postCode = address[address.length - 1].long_name;
          console.log(postCode);
        }
      });
    };
    findAddress(); //call function

    //sends a request to rails to get data from tiner
  	tinderData = $.ajax({
  		url: '/tinder',
  		dataType: 'json',
  		data: {lat: latitude.toFixed(5), lon: longitude.toFixed(5)},
  		complete: function(data) {
  			console.log(data);
  			app.router.navigateFirstUser();
  		}
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


