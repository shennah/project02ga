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

		photoElem.append("<img src=" + personInfo.pictures[0] + ">")
		// $(".photo").html("<img src=" + personInfo.pictures[0] + ">")

		var personName = $("<div/>").text(personInfo.name);
		var personAge = personInfo.age;
		var personBio = personInfo.bio;
		var personGender = personInfo.gender;
		
		matchInfo.append(personName, personAge, personBio, personGender)

		contentElem.append(photoElem, matchInfo);

		this.$el.html(contentElem);


	},

})


		// var template = $('#savePlane').html();

		// var planeElem = $("<div/>").addClass("plane");
		
		

		// this.collection.each(function(plane){
			
		// 	var planeDiv = $("<div/>").addClass("planeDiv");

		// 	var row = plane.get("row");
		// 	var col = plane.get("column");
		// 	var name = plane.get("plane_name").toUpperCase();
			
		// 	planeDiv.append(name, ' - This plane has ', row * col, ' seats.');
			
		// 	// planeElem.prepend('<div id="table"></div>')
		// 	var seatElem = $("<div/>").addClass("table");
		// 	var seats = row * col;
		// 	var $table = $('#table');

		// 	for (var i = 0; i < seats; i++) {
		// 	seatElem.append('<div class="seats">' + (i +1) + '</div>');
		// 	planeDiv.append(seatElem);
		// 	planeElem.append(planeDiv);
		// 	};	
		// });

		// planeElem.prepend(template);
		// this.$el.html(planeElem);