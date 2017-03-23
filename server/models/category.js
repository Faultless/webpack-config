var mongoose = require('mongoose');

var category = new mongoose.Schema({
    _id: { type: Number, index: true },
    name: String
});

module.exports = mongoose.model('Category', category);