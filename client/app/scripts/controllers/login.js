'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http) {
    // $scope.login = function(email, password){
    // 	console.log(email, password);
    // }
    // $scope.createAccnt = function(fname, lname, cemail, remail, cpass){
    // 	console.log(fname, lname, cemail, remail, cpass);
    // }
    var user,
		signup,
		signin;

	// Here we're creating a scope for our Signup page.
	// This will hold our data and methods for this page.
	$scope.signup = signup = {};
	$scope.signin = signin = {};
	// In our signup.html, we'll be using the ng-model
	// attribute to populate this object.
	signup.user = user = {};

	
	// This is our method that will post to our server.
	signup.submit = function () {
		
		// make sure all fields are filled out...
		// aren't you glad you're not typing out
		// $scope.signup.user.firstname everytime now??
		if (
			!user.firstname ||
			!user.lastname ||
			!user.email ||
			!user.password1 ||
			!user.password2
		) {
			alert('Please fill out all form fields.');
			return false;
		}

		// make sure the passwords match match
		if (user.password1 !== user.password2) {
			alert('Your passwords must match.');
			return false;
		}

		// Just so we can confirm that the bindings are working
		console.log(user);

		// Make the request to the server ... which doesn't exist just yet
		var request = $http.post('/login/create', user);

		request.success(function (data) {
			console.log(data);
		});

		request.error(function (data) {
			console.log(data);
		});

	};
	signin.submit = function (){
		if(!signin.user.email || !signin.user.password){
			alert('Please Enter the email and password');
			return false;
		}
		console.log(signin.user);

		var request = $http.post('/login', signin.user);

		request.success(function (data) {
			console.log(data);
		});
		request.error(function (data) {
			console.error(data);
		})
	};

  });
