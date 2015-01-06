var mongoose = require('mongoose');

var modelName = 'repeat';

module.exports = mongoose.model(modelName, {
    times : { type : Number },
    durationType : { type : Number }
}, modelName);