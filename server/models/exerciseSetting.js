var mongoose = require('mongoose');

var modelName = 'exerciseSettings';

module.exports = mongoose.model(modelName, {
    workoutCode : { type : String },
    weight : { type : Number },
    pause : { type : Number }
}, modelName);