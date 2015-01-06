var mongoose = require('mongoose');

var modelName = 'exercise';

module.exports = mongoose.model(modelName, {
    nameCode : { type : String },
    muscleType : { type : Number },
    difficulty : { type : Number }
}, modelName);