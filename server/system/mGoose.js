// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');
// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) // ...
//   console.log('meow');
// });
function mGoose (app, host, port, database) {
	console.log(app);
	console.log(host);
	console.log(port);
	console.log(database);
	this.mongoose = require('mongoose');
	this.connection = 'mongodb://' + 'localhost' + ':' + '27017/test';
	this.app = app;
	app.logger.info('DB up [' + host + ':' + port + '/' + database + ']');
}

module.exports = function(app){
	return new mGoose(app, 
		app.config.db_host, 
		app.config.db_port, 
		app.config.db_database
	);
}