var mongoose = require('mongoose');
var UserModel = require('./schemas/users');

var developmentDb = 'mongodb://localhost/test';
var productionDb = '';

var userDb;


if(process.env.NODE_ENV === 'development'){
	userDb = developmentDb;

	mongoose.connect(userDb);
}
if(process.env.NODE_ENV === 'production'){
	userDb = productionDb;

	mongoose.connect(userDb);
}

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
	console.log('Database Connection Successfully Opened at' + userDb);
});

exports.users = UserModel;