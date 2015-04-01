var mongoose = require("mongoose");
var Schema=mongoose.Schema;
mongoose.model("Users", 
new Schema({
	username:String, 
	password:String, 
	first_name:String,
	last_name:String}),'user');

module.exports=mongoose.model('Users',Schema)