var express = require("express");
var router=express.Router();
var mongoose=require("mongoose");
var config = require ("../config/conf.js");
var user= require("../mongoose/mongSchema");

var db = mongoose.connection;
var dbCollection = db.collections;

router.get("/", function(req,res){

	res.render("register.html");
});

router.post('/',function(req,res){
	var body=req.body
	dbCollection.user.insert({username:body.username,
	 password:body.password,
	 first_name:body.first_name,
	 last_name:body.last_name
	},function(err, data){
		res.send("You are successfully registered");
	});

})
module.exports=router;