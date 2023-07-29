var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
// Import routes from ./routes directory
require('./routes/home.js').route(app,path);
require('./routes/account.js').route(app,path);

app.use(express.static(__dirname +'/www')); // Serve static content for the app from the 'public' dir

app.listen(3000, function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at: ' + n +':'+m)
})

