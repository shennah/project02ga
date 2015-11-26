var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
	"results/:id": "showResult",
	"savedPeople/:id": "singleView",
	"savedPeople": "showSaved"
	},

	singleView: function(id) {
		console.log("displaying all the single ladies");
		var singleView = new app.singleSavedView({collection: app.fetchMatchs});
		singleView.render(id);
	},

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
	},

	navigateFirstUser: function() {
		var ret = Backbone.history.navigate("results/0", true);
		if (ret === undefined) {
			Backbone.history.loadUrl("results/0"); // will function if URL is same as last history url.
		};
	}
});
