var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('mongodb://localhost/testdb');

/* GET All heroes */
router.get('/heroes/list', function(req, res, next) {
    db.heroes.find(function(err, heroes) {
        if (err) {
            res.send(err);
        } else {
            res.json(heroes);
        }
    });
});

module.exports = router;