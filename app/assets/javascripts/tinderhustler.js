  _.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g
};
var tinderData = $.ajax({
		url: '/tinder',
		dataType: 'json',
		complete: function(data) {
			console.log(data);
		}
	}); ;

$(document).ready(function(){

	// var tinderData = $.ajax({
	// 	url: '/tinder',
	// 	dataType: 'json',
	// 	complete: function(data) {
	// 		console.log(data);
	// 	}
	// });

	var router = new app.Router();
	Backbone.history.start();
	// need to fetch data from database to implement
	// app.fetchUsers = new app.Users();
	// app.fetchUsers.fetch();
	// app.fetchPosts = new app.Posts();
	// app.fetchPosts.fetch();
	console.log('test before insert')

});
