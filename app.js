var express = require ("express");
var app = express();

var bodyParser = require('body-parser');
var config     = require ("./config/conf.js");

/* load routers */ 
var router1 = require("./routers/index");
var router2 = require("./routers/register");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use("/public", express.static('./public'));


app.use('/', router1);
app.use('/registration', router2);

app.listen(config.port);

