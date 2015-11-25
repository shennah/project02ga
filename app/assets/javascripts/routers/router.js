var app = app || {};

app.Router = Backbone.Router.extend ({

		routes: {
		"results": "placeMarker",
		"results/:id": "showResult"

		
	},

	placeMarker: function() {
		console.log("placing the marker");
		resultsView = new app.sidebarView();
		resultsView.render();
	},

	showResult: function(id) {
		console.log("rendering the results");
		sidebarView = new app.sidebarView();
		sidebarView.render(id);
	}
});
