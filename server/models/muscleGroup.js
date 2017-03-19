var mongoose = require('mongoose');

var muscleGroup = new mongoose.Schema({
    _exercise: { type: Number, ref: 'Exercise' },
    name: String
});

module.exports = mongoose.model('MuscleGroup', muscleGroup);