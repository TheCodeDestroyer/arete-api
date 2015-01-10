var mongoose = require('mongoose'),
    modelName = 'repeat';

module.exports = mongoose.model(modelName, {
    times : { type : Number },
    durationType : { type : Number },
    _lastChange : { type : Number }
}, modelName);