'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./models');
const router = express.Router();

const jsonParser = bodyParser.json();

//New user post
router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['username', 'password'];
    const missingField = requiredFields.find(field => !(field in req.body));

    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    //Make sure all fields are strings
    const stringFields = ['username', 'password', 'firstName', 'lastName'];
    const nonStringField = stringFields.find(
        field => field in req.body && typeof req.body[field] !== 'string'
    );

    if (nonStringField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Incorrect field type: expected string',
            location: nonStringField
        });
    }
    //Fields that must be trimmed by user
    const trimmedFields = ['username', 'password'];
    const nonTrimmedField = trimmedFields.find(
        field => req.body[field].trim() !== req.body[field]
    );

    if (nonTrimmedField) {
        return releaseEvents.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Cannot start or end with whitespace',
            location: nonTrimmedField
        });
    }

    const sizedFields = {
        username: {
            min: 1
        },
        password: {
            min: 10,
            max: 72
        }
    };
    const underMinField = Object.keys(sizedFields).find(
        field =>
            'min' in sizedFields[field] &&
                req.body[field].trim().length < sizedFields[field].min
    );
    const overMaxField = Oject.keys(sizedFields).find(
        field =>
            'max' in sizedFields[field] &&
                req.body[field].trim().length > sizedFields[field].max
     );

     if (underMinField || overMaxField) {
         return res.status(422).json({
             code: 422,
             reason: 'ValidationError',
             message: underMinField
                ? `Must be at least ${sizedFields[underMinField]
                    .min} characters long`
                : `Must be at most ${sizedFields[overMaxField]
                    .max} characters long`,
            location: underMinField || overMaxField
         });
     }

     let { username, password, firstName = '', lastName = '' } = req.body;

     //Fields accepted by user in untrimmed form
     firstName = firstName.trim();
     lastName = lastName.trim();

     //Verify that username is unique
     return User.find({ username })
        .count()
        .then(count => {
            if (count > 0) {
                return Promise.reject({
                    code: 422,
                    reason: 'ValidationError',
                    message: 'Username already taken',
                    location: 'username'
                });
            }

            return User.hashPassword(password);
        })
        .then(hash => {
            return User.create({
                username,
                password: hash,
                firstName,
                lastName
            });
        })
        .then(user => {
            return res.status(201).json(user.serialize());
        })
        .catch(err => {
            if (err.reason === 'ValidationError') {
                return res.status(err.code).json(err);
            }
            res.status(500).json({ 
                code: 500, 
                message: 'Internal server error'
            });
        });
});

//For better security, delete this block after testing
router.get('/', (req, res) => {
    return User
    .find()
    .then(users => res.json(users.map(user => user.serialize())))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = { router };