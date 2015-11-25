var app = app || {};

app.Router = Backbone.Router.extend ({

		routes: {
		"marker": "placeMarker",
		
	},

	placeMarker: function() {
		console.log("placing the marker");
		resultsView = new app.sidebarView();
		resultsView.render();
	}


});
