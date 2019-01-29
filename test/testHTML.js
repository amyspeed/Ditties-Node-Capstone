'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Open landing page', function() {
    it('should open index.html', function() {
        return chai
            .request(app)
            .get('/html')
            .then(function(res) {
                expect(res).to.have.status(200);
            });
    });
});

describe('Open page to create new user credentials', function() {
    it('should open signup.html', function() {
        return chai
            .request(app)
            .get('/html/signup.html')
            .then(function(res) {
                expect(res).to.have.status(200);
            });
    });
});

describe('Open user dashboard', function() {
    it('should open dash.html', function() {
        return chai
            .request(app)
            .get('/html/dash.html')
            .then(function(res) {
                expect(res).to.have.status(200);
            });
    });
});

describe('Open song form', function() {
    it ('should open songform.html', function() {
        return chai
            .request(app)
            .get('/html/songform.html', function(res) {
                expect(res).to.have.status(200);
            });
    });
});

describe('Open one existing song', function() {
    it('should open song.html', function() {
        return chai 
            .request(app) 
            .get('/html/song.html', function(res) {
                expect(res).to.have.status(200);
            });
    });
});