var express = require('express');
var model = require('../models/muscleGroup');
var muscleGroup = express.Router();

muscleGroup.route('/')
    // List all muscle groups
    .get((req, res) => {
        model.find((err, MuscleGroups) => {
            if(err)
                res.send(err);
            res.json(MuscleGroups);
        });
    })

    // create a muscle group
    .post((req, res) => {
        var newGroup = new model({
            name: req.body.name
        });

        newGroup.save((err) => {
            if(err)
                res.send(err);
            res.json({message: 'Muscle Group Created!'});
        });
    });

muscleGroup.route('/:muscleId')
    // get a specific muscle based on ID
    .get((req, res) => {
        model.findById(req.params.muscleId, (err, muscle) => {
            if(err)
                res.send(err);
            res.json()
        });
    })

    // modify a specific muscle group 
    .put((req, res) => {
        var newGroup = model.findById(req.params.muscleId, (err, Group) => {
            if(err)
                res.send(err);
            Group
                .name = req.body.name;

            Group.save((err) => {
                if(err)
                    res.send(err);
                res.json({message: "Muscle group Modified!"});
            });
        });
    })

    // delete a specific muscle group
    .delete((req, res) => {
        model.remove({ 
            _id: req.body.muscleId
            }, (err) => {
                if(err)
                    res.send(err);
                res.json({message: 'Successfully Removed Group.'});
        })
    });

module.exports = muscleGroup;