var profileModelClass = require('../models/profile_model');

var controller = {};

controller.register = function(req, res) {
	var userData = req.body;

	var profileModel = new profileModelClass();
	profileModel.register(userData, function(err, data) {
		if(err) {return res.send(err);}
		res.send("ok");
	});
};

module.exports = controller;