var mongoose = require('mongoose'),
    modelName = 'exerciseSettings';

module.exports = mongoose.model(modelName, {
    workoutCode : { type : String },
    weight : { type : Number },
    pause : { type : Number },
    _lastChange : { type : Number }
}, modelName);