var app = angular.module('bluewaversApp');

app.controller('homeCtrl', function($scope, $firebaseArray, homeService, fbEmails){
	$scope.subText = 'Email';
	var ref = new Firebase(fbEmails.url);
	$scope.emails = $firebaseArray(ref);


	$scope.checker = function(){
		var check = $('#subby').hasClass("ng-valid-email")
		console.log(check)
			if (check === true){
				$('.validity-circle').removeClass("invalid")
				$('.validity-circle').addClass("valid")
			} else if (check === false){
				$('.validity-circle').addClass("invalid")
				$('.validity-circle').removeClass("valid")
			}
	}


	$scope.subMe = function(){
		if($scope.email){
			homeService.subscribe($scope.email);
			$scope.emails.$add({
			email: homeService.getEmail()
			})
			$scope.subText = 'Thanks for subscribing!';
			$scope.result = 'success';
		}
		else {
			$scope.subText = 'Please enter a valid email.';
			$scope.result = 'fail';
		}
		$scope.email = '';
	}
})