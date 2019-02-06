'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, runServer, closeServer } = require('../server');
const { TEST_DATABASE_URL } = require('../config');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Open HTML pages', function() {
    before(function() {
        return runServer(TEST_DATABASE_URL);
    });
    after(function() {
        return closeServer();
    });


    describe('Open landing page', function() {
        it('should open index.html', function() {
            return chai
                .request(app)
                .get('/')
                .then(function(res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('Open page to create new user credentials', function() {
        it('should open signup.html', function() {
            return chai
                .request(app)
                .get('/signup.html')
                .then(function(res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('Open user dashboard', function() {
        it('should open dash.html', function() {
            return chai
                .request(app)
                .get('/dash.html')
                .then(function(res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('Open song form', function() {
        it ('should open songform.html', function() {
            return chai
                .request(app)
                .get('/songform.html', function(res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('Open song page', function() {
        it ('should open song.html', function() {
            return chai
                .request(app)
                .get('/song.html', function(res) {
                    expect(res).to.have.status(200);
                });
        });
    });

});