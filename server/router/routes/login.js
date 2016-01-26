var express = require('express');

var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Users = db.users;
var time;

router.post('/', function(req, res){
	// console.log(req.body);
	var body = req.body;
	time = moment().format('MMMM Do YYYY, h:mm:ss a');

	Users.findOneAndUpdate({
		'email': body.email
	}, {
		'last_signin': time 
	}, function(err, user){
		console.log(user);
		if(!user){
			res.status(500);
			res.json({'msg': 'User do not exist'});
		}
		else {
			user.comparePassword(body.password, function(err, isMatch){
				// console.log(isMatch);
				if(err){
					res.json({'err': err})
				}
				res.json({
					'success': isMatch,
					'user': {
						'id': user._id
					}
				});

				if(isMatch){
					user.status = true;
					user.save(function(err){
						if(err) throw err;
						console.log('user updated successfully');
					})
				}
			});
		}
		

	});
});
router.post('/create', function(req, res){
	var body = req.body;
	time = moment().format('MMMM Do YYYY, h:mm:ss a');

	Users.findOne({
		'email': body.email
	}, function(err, user){
		// if(err){
		// 	// console.log('Could\'t create new user at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);
		// 	res.status(500);
		// 	res.json({
		// 		'message': 'Internal server error from signing up new user. Please contact'
		// 	});
		// }
		// console.log(user);
		if(!user){
			// console.log('Creating a new user at ' + color.green(time) + ' with the email: ' + color.green(body.email));

			var newUser = Users({
				firstname: body.firstname,
				lastname: body.lastname,
				email: body.email,
				password: body.password1,
				date_created: time,
				status: false
			});
			newUser.save(function(err, savedUser, numberAffected){
				console.log(savedUser);
				console.log(numberAffected);
				if(err) {
					console.log('Problem saving the user ' + color.yellow(body.email) + ' due to ' + err);
					res.status = 500;
					res.json({
						'message': 'Database error trying to signup. Please contact one@two.com'
					});
				}
				// console.log('Successfully created new user: ' + color.green(body.email));
				res.status(201);
				
				res.json({
					'success': true,
					'message': 'Successfully created new user',
					'user': {
						'id': savedUser._id
					}
				});
				// console.log(_.omit(savedUser, 'password'));
			});
		}
		if(user){
			res.status(409);
			res.json({
				'message': body.email + ' already exists!'
			});
		}
	
	});
});


module.exports = router;