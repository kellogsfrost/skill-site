const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(layouts);

app.get('/', function(req, res){
    res.send("yeah it works");
});

app.listen(3000, function(){
    console.log("Listening on port 3000...😈");
});