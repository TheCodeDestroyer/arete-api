var mongoose = require('mongoose');

var modelName = 'workout';

module.exports = mongoose.model(modelName, {
    title : { type : String },
    exercises : { type : Array },
    start : { type : Number },
    duration : { type : Number },
    averageDuration : { type : Number }
}, modelName);