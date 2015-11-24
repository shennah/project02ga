var app = app || {};

app.User = Backbone.Model.extend({
	
	urlRoot: "",

	defaults: {
		name: ""
	}
})