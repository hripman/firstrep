var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// add mongooss
var Schema = mongoose.Schema;

var usersSchema = {	username   : String,
					password   : String,
					first_name : String,
					last_name  : String }


mongoose.model("Users",usersSchema, 'users');

//
mongoose.model("Users", Schema);
var user = mongoose.model("Users");
var db = mongoose.connection;
var dbCollection = db.collections;
	

var model = function() {}

model.prototype.register = function(userData, callback) {
	var insertedData = { 'username'   : userData.username,
	  					 'password'   : userData.password,
	 					 'first_name' : userData.first_name,
	 					 'last_name'  : userData.last_name }

	dbCollection.user.insert(insertedData, function(err, data) {
		if(err) { return callback(err, null);}
		callback(null, data);
	});
};

model.prototype.login = function (userData, callback) { 

		var loginData = { 'username' : userData.username,
						  'password' : userData.password } 	

		
		user.findOne(loginData, function(err, data) {

		if(err) {return callback(err, null)};
		callback(null,data);	
		
	});
};

module.exports = model;