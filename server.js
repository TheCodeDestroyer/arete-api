var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    dev = env === 'development',
    db = require('./config/db'),
    port = process.env.PORT || 8080;

mongoose.set('debug', dev);
mongoose.connect(dev ? db.devUrl : db.url);

var allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
};

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use(allowCors);

require('./server/routes')(app);
app.listen(port);

console.log('Listening on port: ' + port);

exports = app;
