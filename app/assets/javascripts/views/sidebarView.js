
var app = app || {};

app.sidebarView = Backbone.View.extend({

	el: "#sidebar",

	// events: {

	// },

	render: function() {
		console.log('hello sidebar');
		console.log(tinderData.responseJSON[0]);
	},

});
