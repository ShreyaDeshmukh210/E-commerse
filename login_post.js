var exp = require('express');
var app = exp();


app.use(express.static (_dirname + "/" +"login.html"));
app.use(function(req,res,next){
   console.log("in logging middleware");
   next();
});

app.use('/login_post',function(req,res,next){
console.log("in encrypt decrypt middleware");
next();
})

app.get('/home',function(req,res){
    res.send("Home Page");
});


app.listen(8200,function(){
console.log("server connected - 8200");
});