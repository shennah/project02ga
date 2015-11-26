var app = app || {};

app.singleSavedView = Backbone.View.extend({

	el: "#sidebar",

	events: {
		"click .forward": "onForward",
		"click .back": "onBack"
	},

	onForward: function(event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		var id = Number($(".match-info").attr("id"));
		id ++;
		app.router.navigate("savedPeople/" + (id), true);
		console.log("moving to next person");
	},

	onBack: function(event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		var id = Number($(".match-info").attr("id"));
		id --;
		app.router.navigate("savedPeople/" + (id), true);
		console.log("moving to back person");
	},

	render: function(id) {
		console.log('hello again sidebar');
		console.log(id);
		var saved = app.fetchMatchs.models[id];
		console.log(saved);
		var contentElem = $("<div/>").addClass("content");
		var photoElem = $("<div/>").addClass("photo");
		var picUrl = saved.get("pictures");
		photoElem.append("<img src=" + picUrl+ ">");
		var matchInfo = $("<div/>").addClass("match-info").attr("id", id);
		
		var back = $("<div/>").addClass("back").addClass('hvr-pulse-grow');
		var forward = $("<div/>").addClass("forward").addClass('hvr-pulse-grow');

		var personName = $("<div/>").addClass("name").text(saved.get("name"));
		var personAge = $("<div/>").addClass("age").text(saved.get("age"));
		var personBio = $("<div/>").addClass("bio").text(saved.get("bio"));
		var personIncomeDiv = $("<div/>").addClass("income").text("$" + saved.get("income"));
		// var personGender = personInfo.gender;
		
		matchInfo.append(personName, personAge, personBio, personIncomeDiv); //, personGender

		contentElem.append(back, photoElem, forward, matchInfo);

		this.$el.html(contentElem);
		
	}
});
