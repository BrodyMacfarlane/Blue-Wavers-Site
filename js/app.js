var app = angular.module('bluewaversApp', ["firebase", "ngRoute"]);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/social', {
			templateUrl: '/social/socialTmpl.html',
			controller: 'socialCtrl'
		})
		// .otherwise({
		// 	redirectTo:'/'
		// })
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	})
})

app.constant('fbEmails', {
	url: 'https://bluewavers.firebaseio.com/emails'
})