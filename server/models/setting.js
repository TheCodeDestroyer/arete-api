var mongoose = require('mongoose');

var modelName = 'setting';

module.exports = mongoose.model(modelName, {
    nameCode : {type : String, default: ''},
    value : {type : String, default: ''}
}, modelName);