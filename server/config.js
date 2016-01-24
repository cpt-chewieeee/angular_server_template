function Config() {
	this.db_host = 'localhost';
	this.db_port = '27017';
	this.db_database = 'test';

	this.port = 3000;
	this.server_type = 'http';
}
module.exports = function() {
	return new Config();
}