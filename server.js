var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var db = require('./config/db');
var port = process.env.PORT || 8080;

mongoose.connect(env === 'development' ? db.devUrl : db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/app'));

require('./server/routes')(app);
app.listen(port);

console.log('Listening on port: ' + port);

exports = app;
