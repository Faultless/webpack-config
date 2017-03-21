var express = require('express');
var model = require('../models/category');
var category = express.Router();

category.route('/')
    // List all categories
    .get((req, res) => {

    })

    // create a category
    .post((req, res) => {

    });

category.route('/:categoryId')
    // get a specific category based on ID
    .get((req, res) => {

    })

    // modify a specific category 
    .put((req, res) => {

    })

    // delete a specific category
    .delete((req, res) => {
        
    });