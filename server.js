'use strict'

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('./config');
const { Dittie } = require('./models');

const app = express();

app.use(morgan('common'));
app.use(express.json());
app.use(express.static('public'));

//Get all
app.get('/ditties', (req, res) => {
    Dittie
        .find()
        .then(ditties => {
            res.json(ditties.map(ditty => ditty.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Oops! Something went wrong' });
        });
});

//Get by id
app.get('/ditties/:id', (req, res) => {
    Dittie
        .findById(req.params.id)
        .then(ditty => res.json(ditty))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went wrong' });
        });
});

//Post
app.post('/ditties', (req, res) => {
    const requiredFields = ['title', 'userName'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Dittie
        .create({
            title: req.body.title,
            userName: req.body.userName
        })
        .then(ditty => res.status(201).json(ditty.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Somthing went wrong' });
        });
});

//Put

//Delete
app.delete('/ditties/:id', (req, res) => {
    Dittie
        .findByIdAndRemove(req.params.id)
        .then(() => {
            console.log(`Deleted song with id ${req.params.id}`);
            res.status(204).end();
        });
});


app.use('*', function (req, res) {
    res.status(404).json({ message: `Not Found` });
});



let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`App is listening on port ${port}`);
                resolve();
            })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer().catch(err => console.error(err));
}

module.exports = { runServer, app, closeServer };