var express = require('express');
var api = express.Router();
var category = require('./category');
var muscleGroup = require('./muscleGroup');
var exercise = require('./exercise');

// Define routing on an API level

api.use('/category', category);
api.use('/muscleGroup', muscleGroup);
api.use('/exercise', exercise);

module.exports = api;
