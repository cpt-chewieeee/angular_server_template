'use strict';

angular.module ('side_app', [
		'ngRoute',
		'side_app.view1',
		'side_app.view2'
	])
	.config(function($routeProvider){
		$routeProvider.otherwise({redirectTo: '/view1'});
	});