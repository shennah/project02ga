var app = app || {};

app.viewSaved = Backbone.View.extend({

	el: "#sidebar",

	render: function(id) {
		console.log('show id');

		savedUsers = app.fetchMatchs;
		var contentElem = $("<div/>").addClass("content");
		
		savedUsers.each(function() {
			var personElem = $("<div/>").addClass("person")

			var personPic = $("<div/>").addClass("saved-pic");
			personPic.append("<img src=" + this.pictures + ">")
			var personName = $("<div/>").addClass("person-name").text(this.name);

			personElem.append(personPic, personName);
			contentELem.append(personElem);
		})

		this.$el.html(contentELem)
	}

})