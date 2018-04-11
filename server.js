var express      = require('express');
var mongoose     = require('mongoose');
var server       = express();

mongoose.connect('mongodb://localhost:27017/horolo');
module.exports.models = require('./models/index');



server.listen(3005, function(){
    console.log("Server runing on port 3005");
})