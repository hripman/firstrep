var router = express.Router();
var config = require ("../config/conf.js");

var ProfileCtl = require('../controllers/profile.js'); 

router.get("/register", function(req,res){
	res.render("register.html");
});

router.post('/register', function(req, res) {
	ProfileCtl.register(req, res);
});

// router.post('/login', function(req,res){
// 	var username=req.body.usName;
// 	var password=req.body.password;
// 	var name=" ";
// 	console.log(username+" "+password);
// 	user.findOne({username:username, password:password}, function(err, data){
// 		if(!data)
// 			res.redirect("/");
// 		else{

// 			name=data.first_name+" "+data.last_name;
// 			res.render("user.ejs",{name:name});
// 		}
// 	})
// });

module.exports = router;