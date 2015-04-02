var express = require ("express");
var router = express.Router();
var config = require ("../config/conf.js");

router.get("/", function(req,res) {
	res.render("index.ejs",{url:config.registration});
});

module.exports = router;