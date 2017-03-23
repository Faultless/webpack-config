var express = require('express');
var model = require('../models/category');
var category = express.Router();

category.route('/')
    // List all categories
    .get((req, res) => {
        model.find((err, categories) => {
            if(err)
                res.send(err);
            res.json(categories);
        });
    })

    // create a category
    .post((req, res) => {
        var newCategory = new model({
            _id: req.body.id,
            name: req.body.name
        });

        newCategory.save((err) => {
            if(err)
                res.send(err);
            res.json({message: 'category Created!'});
        });
    });

category.route('/:categoryId')
    // get a specific category based on ID
    .get((req, res) => {
        model.findById(req.params.categoryId, (err, category) => {
            if(err)
                res.send(err);
            res.json()
        });
    })

    // modify a specific category
    .put((req, res) => {
        var newCategory = model.findById(req.params.categoryId, (err, Category) => {
            if(err)
                res.send(err);
            Category
                .name = req.body.name;

            Category.save((err) => {
                if(err)
                    res.send(err);
                res.json({message: "category Modified!"});
            });
        });
    })

    // delete a specific category
    .delete((req, res) => {
        model.remove({ 
            _id: req.body.categoryId
            }, (err) => {
                if(err)
                    res.send(err);
                res.json({message: 'Successfully Removed Category.'});
        })
    });

module.exports = category;