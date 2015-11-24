var app = app || {};

app.Router = Backbone.Router.extend ({

		routes: {
		"marker": "placeMarker",
		
	},

	placeMarker: function() {
		console.log("placing the marker");
		markerView = new app.mapView();
		markerView.render();
	}


});
