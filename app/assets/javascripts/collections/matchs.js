var app = app || {};

app.Matchs = Backbone.Collection.extend ({
	
	url: '/matches',

	model: app.Match	
})