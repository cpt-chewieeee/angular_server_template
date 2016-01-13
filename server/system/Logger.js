/* logger.js
*/

function Logger()
{
	this.fs = require('fs');
	this.log_path = process.cwd() + "/logs/"; // CONFIG candidate
}

Logger.prototype.get_filepath = function(file_prefix)
{
	var filename = new Date().toJSON().slice(0,10);

	if (file_prefix != null) {
		filename = file_prefix + "." + filename;
	}
	return this.log_path + filename + ".log"
}

Logger.prototype.log = function(type, msg, file_prefix)
{
	if (typeof file_prefix === 'undefined') {
		file_prefix = null;
	}

	var message = "[" + new Date().toJSON().slice(11,19) + "] " + type + ": " + msg +"\n";
	this.fs.appendFile(this.get_filepath(file_prefix), message, function(err) {
		if (err) {
			console.log("[" + new Date().toJSON().slice(0,10) + "] failed to log: " + message);
		}
	});
}

Logger.prototype.error = function(msg)
{
	this.log("[ERROR]", msg);
}

Logger.prototype.info = function(msg)
{
	this.log("[INFO] ", msg);
}

Logger.prototype.warn = function(msg)
{
	this.log("[WARN] ", msg);
}

Logger.prototype.debug = function(msg)
{
	this.log("[DEBUG]", msg);
}

module.exports = new Logger();



