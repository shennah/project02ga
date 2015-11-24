var app = app || {};

app.Matchs = Backbone.Collection.extend ({
	
	url: '/matchs',

	model: app.Match	
})