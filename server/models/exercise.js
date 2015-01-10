var mongoose = require('mongoose'),
    modelName = 'exercise';

module.exports = mongoose.model(modelName, {
    nameCode : { type : String },
    muscleType : { type : Number },
    difficulty : { type : Number },
    _lastChange : { type : Number }
}, modelName);