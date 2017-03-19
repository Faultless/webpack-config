var express = require('express');
var model = require('../models/bodyBuilder');
var bodyBuilder = express.Router();

bodyBuilder.route('/')
    //List all body builders
    .get((req, res) => {
        model.find((err, BodyBuilders) => {
            if(err)
                res.send(err);
            res.json(BodyBuilders);
        });
    })

    .post((req, res) => {
        
    });