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
  
    var user,
		signup,
		signin;

	var goToDashBoard = function(userId){

		console.log('GOING..', user);
	}

	$scope.signup = signup = {};
	$scope.signin = signin = {};
	signup.user = user = {};

	
	// This is our method that will post to our server.
	signup.submit = function () {
		
		
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

		
		// Make the request to the server ... which doesn't exist just yet
		var request = $http.post('/login/create', user);

		request.success(function (data) {
			// console.log(data);
			if(data.success){
				goToDashBoard(data.user._id);
			}
			
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
		// console.log(signin.user);

		var request = $http.post('/login', signin.user);

		request.success(function (data) {
			// console.log(data);
			if(data.success){
				goToDashBoard(data.user._id);
			}
		});
		request.error(function (data) {
			console.error(data);
		})
	};

  });
