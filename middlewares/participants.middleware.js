const Participant = require('../models/participants.models.js');
const express = require('express');
const mongoose = require('mongoose');

// push data
exports.upload = (req, res, next) => {
    const participant = new Participant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        team: req.body.team,
        registered: req.body.registered,
        breakfast: req.body.breakfast,
        lunch: req.body.lunch,
        dinner: req.body.dinner,
        snacks: req.body.snacks,
        review1: req.body.review1,
        review2: req.body.review2,
        review3: req.body.review3,
        review4: req.body.review4,
    });
    participant
        .save()
        .then(result => {
            res.status(200).json({
                name: result.name,
                _id: result.id,
                team: result.team
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            })
        })
}

// get all data
exports.retrieve = (req, res, next) => {
    Participant.find()
        .select("_id name team registered breakfast lunch dinner snacks review1 review2 review3 review4")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                data: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        team: doc.team,
                        registered: doc.registered,
                        breakfast: doc.breakfast,
                        lunch: doc.lunch,
                        snacks: doc.snacks,
                        dinner: doc.dinner,
                        review1: doc.review1,
                        review2: doc.review2,
                        review3: doc.review3,
                        review4: doc.review4,
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

// get data by id
exports.retrieveByID = (req, res, next) => {
    let response, status;
    const id = req.params.id;
    Participant.find({"_id": id})
        .select("_id name team registered breakfast lunch dinner snacks review1 review2 review3 review4")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                data: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        team: doc.team,
                        registered: doc.registered,
                        breakfast: doc.breakfast,
                        lunch: doc.lunch,
                        snacks: doc.snacks,
                        dinner: doc.dinner,
                        review1: doc.review1,
                        review2: doc.review2,
                        review3: doc.review3,
                        review4: doc.review4,
                    }
                })
            }
            console.log(response);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.deleteByID = (req, res, next) => {
    const id = req.params.id;
    Participant.findOneAndRemove({"_id":id})
        .exec()
        .then (result => {
            res.status(200).json({
                message: "Participant deleted",
                _id: id
            })
        })
        .catch (err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateByID = (req, res, next) => {
    const id = req.params.id;
    const body = {
        name: req.body.name,
        team: req.body.team,
        registered: req.body.registered,
        breakfast: req.body.breakfast,
        lunch: req.body.lunch,
        dinner: req.body.dinner,
        snacks: req.body.snacks,
        review1: req.body.review1,
        review2: req.body.review2,
        review3: req.body.review3,
        review4: req.body.review4,
                    }
    Participant.updateOne({"_id": id}, body, function(err, result) {
        if (err) {
            res.send(err)
        }
        else {
            res.json(result);
        }
    })
}
