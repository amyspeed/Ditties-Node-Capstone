'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dittySchema = mongoose.Schema({

});

// dittySchema.virtual().get(function() {

// });

// dittySchema.methods.serialize = function() {

// };

//The use of the "ie" spelling here is to allow for easier 
//pluralization of Ditties in the DB collection
const Dittie = mongoose.model('Dittie', dittySchema);

module.exports = { Dittie };