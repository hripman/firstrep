var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var config = require ("../config/conf.js");
var user= require("../mongoose/mongSchema");


mongoose.connect(config.mongo);

var app=express();


router.get("/", function(req,res){
	res.render("index.ejs",{url:config.registration});
});



router.post('/', function(req,res){
	var username=req.body.usName;
	var password=req.body.password;
	var name=" ";
	console.log(username+" "+password);
	user.findOne({username:username, password:password}, function(err, data){
		if(!data)
			res.redirect("/");
		else{

			name=data.first_name+" "+data.last_name;
			res.render("user.ejs",{name:name});
		}
	})
});
module.exports=router;