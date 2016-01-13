function Config() {
	this.db_host = 'localhost';
	this.db_port = '27017';
	this.db_database = 'test';
}
module.exports = function() {
	return new Config();
}