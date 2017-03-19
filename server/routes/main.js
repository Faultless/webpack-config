var express = require('express');
var main = express.Router();

main.route('/')
    .get((req, res) => {
        res.render("index");
    });

module.exports = main;