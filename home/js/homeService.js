var app = angular.module('bluewaversApp');

app.service('homeService', function(fbEmails){
	var email = {};
	this.subscribe = function(userEmail){
		email.address = userEmail;
		console.log(email);
	}
	this.getEmail = function(){
		return email.address;
	}
})