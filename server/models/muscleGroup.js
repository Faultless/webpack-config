var mongoose = require('mongoose');

var muscleGroup = new mongoose.Schema({
    _id: { type: Number, index: true },
    name: String
});

module.exports = mongoose.model('MuscleGroup', muscleGroup);