var mongoose = require('mongoose');
var muscleGroup = require('./muscleGroup');
var category = require('./category');


var exerciseSchema = new mongoose.Schema({
    _id: {
        type: Number,
        index: true
    },
    name: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category.name' },
    muscleGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MuscleGroup.name' }],
    demoVideo: String
}); 

module.exports = mongoose.model('Exercise', exerciseSchema);