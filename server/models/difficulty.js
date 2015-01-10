var mongoose = require('mongoose'),
    modelName = 'difficulty';

module.exports = mongoose.model(modelName, {
    code : { type : Number },
    name : { type : String },
    _lastChange : { type : Number }
}, modelName);