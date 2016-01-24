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
		'email': body.email;
	}, function(err, user){
		if(err){
			console.log('Could\'t create new user at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);
			res.status(500).json({
				'message': 'Internal server error from signing up new user. Please contact'
			});
		}
		if(!user){
			console.log('Creating a new user at ' + color.green(time) + ' with the email: ' + color.green(body.email));

			var newUser = newUsers({
				firstname: body.firstname,
				lastname: body.lastname,
				email: body.email,
				password: body.password
			})
		}
	})
	res.json({
		'msg': 'success'
	});
});
router.post('/create', function(req, res){
	console.log(req.body);

	res.json({
		'msg': 'success'
	});
});

router.post('/special', function(req, res){
	res.json({
		'msg': 'this was posted to /signup/special'
	});
});

module.exports = router;