var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
	// "results": "placeMarker",
	"results/:number": "showResult",
	"savedPeople": "showSaved"

	
	},

	// placeMarker: function() {
	// 	console.log("placing the marker");
	// 	resultsView = new app.sidebarView();
	// 	resultsView.render();
	// },

	showResult: function(id) {
		console.log("rendering the results");
		console.log("router id is = " + id)
		var sidebarView = new app.sidebarView({collection: app.fetchMatchs});
		sidebarView.render(id);
	},

	showSaved: function() {
		console.log("showing saved people");
		var savedView = new app.viewSaved({collection: app.fetchMatchs});
		savedView.render()
	}
});
