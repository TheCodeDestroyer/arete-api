var mongoose = require('mongoose'),
    modelName = 'setting';

module.exports = mongoose.model(modelName, {
    nameCode : {type : String, default: '_NEW'},
    value : {type : String, default: ''},
    _lastChange : { type : Number }
}, modelName);