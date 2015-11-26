var app = app || {};

app.singleView = Backbone.View.extend({

	el: "#sidebar",

	events: {

	},

	render: function(id) {
		console.log('hello again sidebar');
		
		var personInfo = tinderData.responseJSON[id];
		
		var contentElem = $("<div/>").addClass("content");
		var photoElem = $("<div/>").addClass("photo");
		var matchInfo = $("<div/>").addClass("match-info").attr("id", id);
		
		photoElem.append(no, "<img src=" + personInfo.pictures[0] + ">", yes)
		// $(".photo").html("<img src=" + personInfo.pictures[0] + ">")
		

		var personName = $("<div/>").addClass("name").text(personInfo.name);
		var personAge = $("<div/>").addClass("age").text(personInfo.age);
		var personBio = $("<div/>").addClass("bio").text(personInfo.bio);
		// var personGender = personInfo.gender;
		
		var seeMatches = $("<div>See your Matches!</div>").addClass("see-matches");

		matchInfo.append(personName, personAge, personBio) //, personGender

		contentElem.append(photoElem, matchInfo, seeMatches);

		this.$el.html(contentElem);
		
	},