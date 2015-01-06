var mongoose = require('mongoose');

var modelName = 'durationType';

module.exports = mongoose.model(modelName, {
    code : { type : Number },
    name : { type : String },
    _lastChange : { type : Number }
}, modelName);