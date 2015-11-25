var app = app || {};

app.Match = Backbone.Model.extend({

	urlRoot: '/matches',

	defaults: {
		name: "",
		pictures: "", //one picture for now, add more later
		age: "",
		bio: "",
		income: "",
		location: "",
		user_id: "",
	}

})