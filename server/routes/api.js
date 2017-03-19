var express = require('express');
var api = express.Router();
var exercise = require('./exercise');

api.use('/exercise', exercise);

module.exports = api;
