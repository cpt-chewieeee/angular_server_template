'use strict';

angular.module ('side_app', [
		'ngRoute',
		'side_app.view1',
		'side_app.view2',
		'side_app.view2.directives',
		'side_app.view2.services'
	])
	.config(function($routeProvider){
		$routeProvider.otherwise({redirectTo: '/view1'});
	});
var myServices = angular.module('side_app.view2.services', [])