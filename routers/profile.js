var express = require ("express");
var router = express.Router();
var config = require ("../config/conf.js");

var ProfileCtl = require('../controllers/profile.js'); 

router.get("/register", function(req,res){
	res.render("register.html");
});

router.post('/register', function(req, res) {
	ProfileCtl.register(req, res);
});

router.post('/login', function(req,res){
	ProfileCtl.login(req, res);
});

module.exports = router;