var app = angular.module('bluewaversApp', ["firebase", "ngRoute"]);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/twitter', {
			templateUrl: 'twitter/twitterTmpl.html',
			controller: 'twitterCtrl'
		})
		.when('/soundcloud', {

		})
		.when('/instagram', {

		})
		.otherwise({
			redirectTo:'/home'
		})
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
})

app.constant('fbEmails', {
	url: 'https://bluewavers.firebaseio.com/emails'
})