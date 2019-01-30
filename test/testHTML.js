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