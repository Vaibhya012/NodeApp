<<<<<<< HEAD
var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('nahi disla ');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
=======
var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('nahi disla ');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
>>>>>>> 7df0eff773036ddcc0b8b2986370e62fde3b7dec
