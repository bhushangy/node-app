var express = require("express");
var app = express();
var bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended:true}));

var lis = ['dvfdv','vfdv']

//app.get("/",function(req,res){
//    res.send("hi der!!")
//})

//app.get("/sound/:animal",function(req,res){
//    var snd = {
//        dog:"woof",
//        cat :"meow"
//    }
//
//    res.send("the "+req.params.animal.toLowerCase()+" says "+snd[req.params.animal.toLowerCase()])
//})
//
//
//app.get("/repeat/:entry/:count",function(req,res){
//
//   var cnt = Number(req.params.count);
//   var ent = req.params.entry;
//   var str="";
//    for(var i=0;i<cnt;i++)
//   {
//        str=str+ent+" "
//   } 
//   res.send(str)
//})




app.get("/",function(req,res){
        res.render("home.ejs")
})


app.post("/",function(req,res){
    var nia = req.body.newf;
    lis.push(nia)
    res.redirect("/friends")
})

app.get("/friends",function(req,res){
    res.render("friends.ejs",{lis:lis})
})











app.listen(3000,function(){
    console.log("listening on port 3000")
  
})
