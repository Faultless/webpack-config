var mongoose = require('mongoose');

var muscleGroup = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('MuscleGroup', muscleGroup);