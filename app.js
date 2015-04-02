var express = require ("express");
var app = express();

var bodyParser = require('body-parser');
var config     = require ("./config/conf.js");

/* load routers */ 
var router1 = require("./routers/index");
var profileRouter = require("./routers/profile");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use("/public", express.static('./public'));


app.use('/', router1);
app.use('/profile', profileRouter);

app.listen(config.port);

