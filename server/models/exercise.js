var mongoose = require('mongoose');
var muscleGroup = require('./muscleGroup');
var category = require('./category');


var exerciseSchema = new mongoose.Schema({
    _id: {
        type: Number,
        index: true
    },
    name: String,
    category: { type: mongoose.Schema.ObjectId, ref: 'Category.Schema' },
    muscleGroups: [{ type: mongoose.Schema.ObjectId, ref: 'MuscleGroup.Schema' }],
    demoVideo: String
}); 

module.exports = mongoose.model('Exercise', exerciseSchema);