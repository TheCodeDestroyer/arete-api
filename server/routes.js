var Setting = require('./models/setting');

module.exports = function(app) {

    app.get('/api/setting', function(req, res) {
        Setting.find(function(err, settings) {

            if (err)
                res.send(err);

            res.json(settings);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./app/index.html'); // load our public/index.html file
    });

};