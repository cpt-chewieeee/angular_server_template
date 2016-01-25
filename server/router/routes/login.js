var express = require('express');

var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Users = db.users;

router.post('/', function(req, res){
	console.log(req.body);
	var body = req.body;
	var time = moment().format('MMMM Do YYYY, h:mm:ss a');

	Users.findOne({
		'email': body.email
	}, function(err, user){
		if(err){
			// console.log('Could\'t create new user at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);
			res.status(500).json({
				'message': 'Internal server error from signing up new user. Please contact'
			});
		}
		console.log(user);
		if(!user){
	
		}
		if(user){
			res.status(409).json({
				'message': body.email + ' already exists!'
			});
		}
		res.json({
			'msg': 'success'
		});
	});
	// res.json({
	// 	'msg': 'success'
	// });
});
router.post('/create', function(req, res){
	var body = req.body;
	var time = moment().format('MMMM Do YYYY, h:mm:ss a');

	
	console.log(body);
	
	console.log("~~~~~~~~~~~~~~~");
	// console.log(db);
	Users.findOne({
		'email': body.email
	}, function(err, user){
		if(err){
			// console.log('Could\'t create new user at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);
			res.status(500).json({
				'message': 'Internal server error from signing up new user. Please contact'
			});
		}
		console.log(user);
		if(!user){
			console.log('Creating a new user at ' + color.green(time) + ' with the email: ' + color.green(body.email));

			var newUser = Users({
				firstname: body.firstname,
				lastname: body.lastname,
				email: body.email,
				password: body.password1
			});
			newUser.save(function(err, savedUser, numberAffected){
				if(err) {
					console.log('Problem saving the user ' + color.yellow(body.email) + ' due to ' + err);
					res.status(500).json({
						'message': 'Database error trying to signup. Please contact one@two.com'
					});
				}
				console.log('Successfully created new user: ' + color.green(body.email));
				res.status(201).json({
					'message': 'Successfully created new user',
					'client': _.omit(savedUser, 'password')
				});
			});
		}
		if(user){
			res.status(409).json({
				'message': body.email + ' already exists!'
			});
		}
		res.json({
			'msg': 'success'
		});
	});
});


module.exports = router;