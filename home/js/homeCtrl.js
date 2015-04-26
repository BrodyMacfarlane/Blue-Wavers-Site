var app = angular.module('bluewaversApp');

app.controller('homeCtrl', function($scope, $firebaseArray, homeService, fbEmails){
	var ref = new Firebase(fbEmails.url);
	$scope.emails = $firebaseArray(ref);
	$scope.subMe = function(){
		homeService.subscribe($scope.email);
		$scope.emails.$add({
			email: homeService.getEmail()
		})
	}
})