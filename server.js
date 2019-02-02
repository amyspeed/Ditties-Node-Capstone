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
            res.json(ditties);//.map(ditty => ditty.serialize()));
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
    const requiredFields = ['title'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Dittie
        .create(req.body)
        .then(ditty=> {
            ditty.content = [];
            req.body.content.forEach((content)=>{
              ditty.content.push(content);    
            });
            return ditty.save();
          })
        .then(ditty => res.status(201).json(ditty))//.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Somthing went wrong' });
        });
});

//Put
app.put('/ditties/:id', (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
        res.status(400).json({
            error: `Request path id and request body id values must match`
        });
    }

    const updated = {};
    const updateableFields = ['title'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    Dittie
        .findByIdAndUpdate(req.params.id, { $set: updated })
        .then(() => {
            res.status(204).end();
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        });
});

//Delete
app.delete('/ditties/:id', (req, res) => {
    Dittie
        .findByIdAndRemove(req.params.id)
        .then(() => {
            console.log(`Deleted song with id ${req.params.id}`);
            res.status(204).end();
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ messaage: 'Internal server error' });
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