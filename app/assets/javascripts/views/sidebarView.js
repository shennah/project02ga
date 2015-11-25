
var app = app || {};

app.sidebarView = Backbone.View.extend({

	el: "#sidebar",

	events: {
		"click .yes" : "savePerson",
		// "click .no" :
	},

	savePerson: function(event) {
		// debugger;
		event.stopPropagation();
		event.stopImmediatePropagation();
		event.preventDefault();
		console.log("saving");
		return
		var id = $(".match-info").attr("id")
		// console.log(number);
		var personInfo = tinderData.responseJSON[id];
		var personName = personInfo.name;
		var personAge = personInfo.age;
		var personBio = personInfo.bio;
		var personGender = personInfo.gender;
		var personPhoto = personInfo.pictures[0];

		this.collection.create({
			name: personName, pictures: personPhoto, age: personAge, 
			bio: personBio});
		
		console.log("saving compete")
	},

	render: function(id) {
		console.log('hello sidebar');
		
		var personInfo = tinderData.responseJSON[id];
		
		var contentElem = $("<div/>").addClass("content");
		var photoElem = $("<div/>").addClass("photo");
		var matchInfo = $("<div/>").addClass("match-info").attr("id", id);

		var no = $("<div/>").addClass("no");
		var yes = $("<div/>").addClass("yes");
		
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



});






