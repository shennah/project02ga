var app = app || {};

app.viewSaved = Backbone.View.extend({

	el: "#sidebar",

	// events: {
	// 	"click .person": "viewSingle",
	// },

	// viewSingle: function(event) {
	// 	event.stopPropagation();
	// 	event.stopImmediatePropagation();
	// 	console.log(event.target);
	// },

	render: function() {
		console.log('show id');

		savedUsers = app.fetchMatchs;
		var contentElem = $("<div/>").addClass("content");
		
		savedUsers.each(function(user) {
			var id = user.get("id");
			var personElem = $("<div/>").addClass("person").attr("id", id);
			var personPic = $("<div/>").addClass("saved-pic");
			var picUrl = user.get("pictures");
			personPic.append("<img src=" + picUrl+ ">");
			var personName = $("<div/>").addClass("person-name").text(user.get("name"));

			personElem.append(personPic, personName);
			contentElem.append(personElem);
		})

		this.$el.html(contentElem)
	}

})