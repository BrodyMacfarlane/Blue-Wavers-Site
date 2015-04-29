var app = angular.module('bluewaversApp');

app.controller('socialCtrl', function($scope, $timeout, socialService){
	socialService.load();
})