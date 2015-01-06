var Setting = require('./models/setting');

module.exports = function(app) {

    app.get('/api/setting', function(req, res) {
        Setting.find(function(err, settings) {

            if (err)
                res.send(err);

            console.log(settings);

            res.json(settings);
        });
    });

    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/app/index.html');
    });

};