var mongoose = require('mongoose');

var modelName = 'muscleType';

module.exports = mongoose.model(modelName, {
    code : { type : Number },
    name : { type : String }
}, modelName);