var mongoose = require('mongoose');

module.exports = mongoose.model('setting', {
    nameCode : {type : String, default: ''},
    value : {type : String, default: ''}
});