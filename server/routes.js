var Workout = require('./models/workout');

module.exports = function(app) {

    app.get('/api/*', function(req, res) {
        var splitPath = req.path.split('/');

        if (splitPath.length !== 3) {
            res.send({ error: 'Internal server error' });
            console.log('1');
        }
        else {
            var Model = require('./models/' + splitPath[2]);
            Model.find(function (err, array) {

                if (err)
                    res.send(err);

                var wrappedData = wrapPureData(array);

                res.json(wrappedData);
            });

        }
    });

    app.post('/api/*', function(req, res) {
        var splitPath = req.path.split('/');

        if (splitPath.length !== 3) {
            res.send({ error: 'Internal server error' });
            console.log('1');
        }
        else {
            var Model = require('./models/' + splitPath[2]);
            Model.find(function (err, array) {

                if (err)
                    res.send(err);


                var response = {
                    now: "ok",
                    updates: getEpoch()
                };

                res.json(response);
            });

        }
    });

    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/app/index.html');
    });

    function wrapPureData(array) {
        return {
            now: getEpoch(),
            updates: array
        };
    }

    function getEpoch() {
        return new Date().getTime();
    }

};