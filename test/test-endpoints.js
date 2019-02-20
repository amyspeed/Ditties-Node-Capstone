'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, runServer, closeServer } = require('../server');
const { JWT_SECRET, TEST_DATABASE_URL } = require('../config');
const { User } = require('../users')
const jwt = require('jsonwebtoken');

const expect = chai.expect;

chai.use(chaiHttp);


describe('Protect endpoint', function() {
    const username = 'testName';
    const password = 'textWord';
    const firstName = 'Test';
    const lastName = 'User';

    before(function() {
        return runServer(TEST_DATABASE_URL);
    });
    after(function() {
        return closeServer();
    });
    beforeEach(function() {
        return User.hashPassword(password)
            .then(password =>
                User.create({
                    username,
                    password,
                    firstName,
                    lastName
                })
        );
    });
    afterEach(function() {
        return User.deleteOne({});
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

    describe('/ditties', function() {

        const authToken = jwt.sign(
            {
                username,
            },
            JWT_SECRET,
            {
                algorithm: 'HS256',
                expiresIn: '7d'
            }
        );

        it('should add a new song on POST', function(){
        
            // const newDitty = {
            //     title: "Test Title"
            // };
            // const expectedKeys = ['id'].concat(Object.keys(newDitty));

            // return chai
            //     .request(app)
            //     .post('/ditties')
            //     .set('Authorization', `Bearer ${authToken}`)
            //     .send(newDitty)
            //     .then(function(res) {
            //         expect(res).to.have.status(201);
            //         expect(res).to.be.json;
            //         expect(res.body).to.be.an('object');
            //         expect(res.body).to.have.all.keys(expectedKeys);
            //         expect(res.body.title).to.equal(newDitty.title);
            //     });
        });

        it('should return an error if missing expected values in POST', function () {
            // const emptyData = {};
            // return chai
            //     .request(app)
            //     .post("/ditties")
            //     .set('Authorization', `Bearer ${authToken}`)
            //     .send(emptyData)
            //     .then(function (res) {
            //         expect(res).to.have.status(400);
            //     });
        });

        it('should list all ditties on GET', function() {
            // return chai
            //     .request(app)
            //     .get('/ditties')
            //     .set('Authorization', `Bearer ${authToken}`)
            //     .then(function (res) {
            //         expect(res).to.have.status(200);
            //         expect(res).to.be.json;
            //         expect(res.body).to.be.an('array');
            //         res.body.forEach(function(ditty) {
            //             expect(ditty).to.be.an('object');
            //             expect(ditty).to.have.keys(
            //                 'id',
            //                 'title'
            //             );
            //         });
            //     });
        });

        it('should GET song by id', function() {

        });

        it('should edit ditties with PUT', function() {

        });

        it('should DELETE ditty by id', function() {

        });
    });            

});