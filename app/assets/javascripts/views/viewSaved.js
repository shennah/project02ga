var app = app || {};

app.viewSaved = Backbone.View.extend({

	el: "#sidebar",

	render: function() {
		console.log('show id');

		savedUsers = app.fetchMatchs;
		var contentElem = $("<div/>").addClass("content");
		var theOne = $("<h2>Any of these... Could be <span class='the-one'>THE ONE</span></h2>").addClass("chosen");

		savedUsers.each(function(user) {
			var id = Number(user.get("id"));
			var personElem = $("<a href>").attr("href", "#savedPeople/" + ( id - 1 )).addClass("person");
			// var personElem = $("<div/>").addClass("person").attr("id", id);
			var personPic = $("<div/>").addClass("saved-pic");
			var picUrl = user.get("pictures");
			personPic.append("<img src=" + picUrl+ ">");
			var personName = $("<div/>").addClass("person-name").text(user.get("name"));

			personElem.append(personPic, personName);
			contentElem.append(personElem);
			contentElem.prepend(theOne);
		})

		this.$el.html(contentElem)
	}

})