'use strict';
angular.module('side_app.view2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/view2', {
		templateUrl: 'view2/view2.html',
		controller: 'View2Ctrl'
	});
}])
.controller('View2Ctrl', ['$scope', function($scope){
	$scope.score = 0;
	$scope.lifesCount = 3;
}])