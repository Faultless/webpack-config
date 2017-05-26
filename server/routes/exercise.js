var express = require('express');
var model = require('../models/exercise');
var category = require('../models/category');
var exercise = express.Router();

exercise.route('/')
    // List all exercises
    .get((req, res) => {
        model.find((err, Exercises) => {
            if(err)
                res.send(err);
            res.json(Exercises);
        });
    })

    // Create an exercise
    .post((req, res) => {
        category.find({ 'name': req.body.category }, (err, Category) => {
            if(err)
                res.send(err);
            var newExercise = new model({
                name: req.body.name,
                category: Category[0]._id,
                demoVideo: req.body.demoVideo
            });

            req.body.muscleGroups.forEach((element, index, array) => {
                newExercise.muscleGroups[index] = element;
            });

            newExercise.save((err) => {
                if(err)
                    res.send(err);
                res.json({ message: 'Exercise created!' });
            });
        });

        
    });

exercise.route('/:exerciseId')
    // Get Specific Exercise using ID
    .get((req, res) => {
        model.findById(req.params.exerciseId, (err, exercise) => {
            if(err)
                res.send(err);
            res.json(exercise);
        });
    })

    // change Specific Exercise using ID
    .put((req, res) => {
        model.findById(req.params.exerciseId, (err, exercise) => {
            if(err)
                res.send(err);

            exercise
                .name = req.body.name
                .category = req.body.category
                .demoVideo = req.body.demoVideo;

            req.body.muscleGroups.forEach((element, index, array) => {
                exercise.muscleGroups[index] = element;
            }); 

            exercise.save((err) => {
                if(err)
                    res.send(err);
                res.json({ message: 'Exercise updated!' });
            });
        });
    })

    // Delete Specific Exercise using ID
    .delete((req, res) => {
        model.remove({
            _id: req.params.exerciseId
        }, (err, exercise) => {
            if(err)
                res.send(err);

            res.json({ message: "Successfully deleted" });
        });
    });

module.exports = exercise;