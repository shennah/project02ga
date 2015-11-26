
var app = app || {};

app.sidebarView = Backbone.View.extend({

	el: "#sidebar",

	events: {
		"click .yes" : "savePerson",
		"click .no" : "discardPerson",
		"click .see-matches" : "savedMatches",
	},

	savedMatches: function(event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		console.log("show all saved results");
		app.router.navigate("savedPeople", true);
	},

	discardPerson: function(event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
		console.log("discarding person");
		var id = Number($(".match-info").attr("id"));
		id ++;
		app.router.navigate("results/" + (id), true);
		console.log("moving to next person");
	},
	
	savePerson: function(event) {
		// debugger;
		event.stopPropagation();
		event.stopImmediatePropagation();
		console.log("saving");
		var id = Number($(".match-info").attr("id"));
		var personInfo = tinderData.responseJSON[id];
		var personName = personInfo.name;
		var personAge = personInfo.age;
		var personBio = personInfo.bio;
		var personGender = personInfo.gender;
		var personPhoto = personInfo.pictures[0];

		this.collection.create({
			name: personName, pictures: personPhoto, age: personAge, 
			bio: personBio});
		id ++;
		app.router.navigate("results/" + (id), true);
		console.log("saving compete")
	},

	render: function(id) {
		console.log('hello sidebar');
		
		var personInfo = tinderData.responseJSON[id];
		
		var contentElem = $("<div/>").addClass("content");
		var photoElem = $("<div/>").addClass("photo");
		var matchInfo = $("<div/>").addClass("match-info").attr("id", id);

		var no = $("<div/>").addClass("no").addClass('hvr-pulse-grow');
		var yes = $("<div/>").addClass("yes").addClass('hvr-pulse-grow');
		
		photoElem.append("<img src=" + personInfo.pictures[0] + ">").addClass('animated zoomIn');
		// $(".photo").html("<img src=" + personInfo.pictures[0] + ">")
		

		var personName = $("<div/>").addClass("name").text(personInfo.name);
		var personAge = $("<div/>").addClass("age").text(personInfo.age);
		var personBio = $("<div/>").addClass("bio").text(personInfo.bio);
		// var personGender = personInfo.gender;
		
		var seeMatches = $("<div>See your Matches!</div>").addClass("see-matches");//.addClass("hvr-grow")

		matchInfo.append(personName, personAge, personBio).addClass('animated fadeIn') //, personGender

		contentElem.append(no, photoElem, yes, matchInfo, seeMatches);

		this.$el.html(contentElem);
		
	},



});






