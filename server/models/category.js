var mongoose = require('mongoose');

var category = new mongoose.Schema({
    _exercise: { type: Number, ref: 'Exercise' },
    name: String
});

module.exports = mongoose.model('Category', category);