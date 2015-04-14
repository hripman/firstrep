var mongoose = require('mongoose');
var Joi = require("joi");
mongoose.connect('mongodb://localhost/users');

// add mongooss
var Schema = mongoose.Schema;
  


var usersSchema = new Schema({	username   : String,
					password   : String,
					first_name : String,
					last_name  : String,
					
				});
					
//joi validate
usersSchema.methods.Validate = function(obj) {
	var schema = {
					username: Joi.string().min(6).max(30),
					password: Joi.string().min(8).max(30),
					first_name: Joi.string(),
					last_name: Joi.string(),
					
					
				};
				return Joi.validate(obj, schema);

}

//create mongoose object
var user =  mongoose.model("Users",usersSchema);

	

var model = function() {}

model.prototype.register = function(userData, callback) {
	var insertedData = { username : userData.username,
	  					 password  : userData.password,
	 					 first_name : userData.first_name,
	 					 last_name  : userData.last_name }

	 		
	 var newUser = new user (insertedData);
	 var err = newUser.Validate(insertedData);
	 
	 console.log(err);
	 if(err)  throw err;
					 
	 user.create(insertedData, function(err,data){
	 		if(err) { console.log(error);
	 			return callback(err, null);}
		callback(null, data);

	});	
		 

	
};

model.prototype.login = function (userData, callback) { 

		var loginData = { username : userData.username,
						  password : userData.password } 	

		
		user.find(loginData, function(err, data) {

		
		if(err) { return callback(err, null)};
		
		callback(null,data);	
		
	});
		user.find({},function(err,data){
			console.log(data);
		});
		 
};

module.exports = model;