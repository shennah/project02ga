
var app = app || {};

app.sidebarView = Backbone.View.extend({

	el: "#sidebar",

	events: {
		"click .likePerson" : "savePerson"
	},

	savePerson: function(id) {

		var personInfo = tinderData.responseJSON[id];
		var personAge = personInfo.age;
		var personBio = personInfo.bio;
		var personGender = personInfo.gender;
		var personPhoto = personInfo.pictures[0];

		// this.collection.create({
		// 	name: personName, pictures: personPhoto, age: personAge, 
		// 	bio: personBio
	},

	render: function(id) {
		console.log('hello sidebar');
		
		var personInfo = tinderData.responseJSON[id];
		
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


		contentElem.append(no, photoElem, yes, matchInfo);


		this.$el.html(contentElem);

	},

});




