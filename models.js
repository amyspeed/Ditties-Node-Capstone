'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dittySchema = mongoose.Schema({
    userName: { type: String, required: true },
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
    content: [
        {
            sectionId: Number,
            section: String,
            chords: String,
            lyrics: String
        }
    ],    
    created: { type: Date, default: Date.now }
});

// dittySchema.virtual().get(function() {

// });

dittySchema.methods.serialize = function() {
    return {
        id: this._id,
        title: this.title,
        created: this.created
    };
 };

//The use of the "ie" spelling here is to allow for easier 
//pluralization of Ditties in the DB collection
const Dittie = mongoose.model('Dittie', dittySchema);

module.exports = { Dittie };