var mongoose = require('mongoose');

var category = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Category', category);