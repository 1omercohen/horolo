var express         = require('express');
var path            = require('path');
var mongoose        = require('mongoose');
var passport        = require('passport');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var expressSession  = require('express-session');
var server          = express();

mongoose.connect('mongodb://localhost:27017/horolo');
module.exports.models = require('./models/index');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use(expressSession({secret: 'mySecretKey'}));
server.use(passport.initialize());
server.use(passport.session());

var initPassport = require('./config/passport');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

server.listen(3005, function(){
    console.log("Server runing on port 3005");
})