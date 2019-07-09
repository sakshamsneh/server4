const express = require('express');
var router = express.Router();
const fs = require('fs');
var ObjectId = require('mongoose').Types.ObjectId;

var { Food } = require('../models/food');

router.get('/', (req, res) => {
    Food.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Foods:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);//400=bad req

    Food.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Food :' + JSON.stringify(err, undefined, 2)); }
    });
});

//{"title":"Dosa","desc":"A dosa is a cooked flat thin layered rice batter, originating from the Indian subcontinent, made from a fermented batter","cost":35,"count":5}
router.post('/', (req, res) => {
	var fd = new Food({
		title: req.body.title,
        desc: req.body.desc,
        cost: req.body.cost,
        count: req.body.count,
    });
    fd.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Food Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    var fd = {
        title: req.body.title,
        desc: req.body.desc,
        cost: req.body.cost,
        count: req.body.count,
    };
	Food.findByIdAndUpdate(req.params.id, { $set: fd }, { new: true }, (err, doc) => {
		if (!err) { res.send(doc); }
		else { console.log('Error in Food Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Food.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Food Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;