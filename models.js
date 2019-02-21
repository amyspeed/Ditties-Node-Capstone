'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const contentSchema = mongoose.Schema({
    sectionId: Number,
    section: String,
    chords: String,
    lyrics: String
});

const dittySchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    coauthors: { type: String },
    genreFeel: { type: String },
    speed: { type: String },
    key: { type: String },
    capo: { type: Number },
    timeSig: {
        top: Number,
        bottom: Number
    },
    strum: { type: String },
    notes: { type: String },
    content: [contentSchema],    
    created: { type: Date, default: Date.now }
});


//The use of the "ie" spelling here is to allow for easier 
//pluralization of Ditties in the DB collection
const Dittie = mongoose.model('Dittie', dittySchema);

module.exports = { Dittie };