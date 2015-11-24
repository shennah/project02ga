var app = app || {};

var app.Router = Backbone.Router.extend ({

		routes: {
		"users": "homePage",
		
	},

	homePage: function() {
		console.log("welcome to the homepage");
	}


});
