var express =require ("express");
var app=express();

 app.get("/", function(req,res){
	res.send("Hello");
	console.log("hay");
})
app.listen(3000);