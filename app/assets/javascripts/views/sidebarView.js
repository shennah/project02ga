
var app = app || {};

app.sidebarView = Backbone.View.extend({

	el: "#sidebar",

	// events: {

	// },

	render: function(id) {
		console.log('hello sidebar');
		// console.log(tinderData.responseJSON[0]);
		console.log(id);
		var personInfo = tinderData.responseJSON[id];
		console.log (personInfo);
		var contentElem = $("<div/>").addClass("content");
		var photoElem = $("<div/>").addClass("photo");
		var matchInfo = $("<div/>").addClass("match-info");

		var no = $("<div/>").addClass("no");
		var yes = $("<div/>").addClass("yes");
		
		photoElem.append(no, "<img src=" + personInfo.pictures[0] + ">", yes)
		// $(".photo").html("<img src=" + personInfo.pictures[0] + ">")

		

		var personName = $("<div/>").addClass("name").text(personInfo.name);
		var personAge = $("<div/>").addClass("age").text(personInfo.age);
		var personBio = $("<div/>").addClass("bio").text(personInfo.bio);
		// var personGender = personInfo.gender;
		
		matchInfo.append(personName, personAge, personBio) //, personGender

		contentElem.append(photoElem, matchInfo);

		this.$el.html(contentElem);


	},
});



