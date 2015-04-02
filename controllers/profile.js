var profileModelClass = require('../models/profile_model');

var controller = {};

controller.register = function(req, res) {
	var userData = req.body;

	var profileModel = new profileModelClass();
	profileModel.register(userData, function (err, data) {
		if(err) {return res.send(err);}
		res.send("ok");
	});
};

controller.login = function (req,res){


	var userData = req.body;
	var userInf;
	var profileModel = new profileModelClass();
	

	profileModel.login(userData, function (err, data) {
		if(err) {return res.send(err);}
		res.send("OK");
	});
};
	module.exports = controller;


