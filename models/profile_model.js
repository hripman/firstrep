var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// add mongooss


var model = function() {}

model.prototype.register = function(userData, callback) {
	var insertedData = { 'username'   : userData.username,
	  					 'password'   : userData.password,
	 					 'first_name' : userData.first_name,
	 					 'last_name'  : userData.last_name }

	dbCollection.user.insert( insertedData, function(err, data) {
		if(err) { return callback(err, null);}
		callback(null, data);
	});
};

module.exports = model;