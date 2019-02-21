'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

const { app, runServer, closeServer } = require('../server');
const { JWT_SECRET, TEST_DATABASE_URL } = require('../config');
const { User } = require('../users')
const { Dittie } = require('../models')

const expect = chai.expect;

chai.use(chaiHttp);


describe('Protect endpoint', function() {
    const username = 'testName';
    const password = 'textWord';
    const firstName = 'Test';
    const lastName = 'User';

    const content = [{}];
        content[0].sectionId = '2';
        content[0].section = 'verse';
        content[0].chords = 'CCCCCCCCG';
        content[0].lyrics = 'Test Test Test Test Test';
    const timeSig = {};
        timeSig.top = '6';
        timeSig.bottom = '8';
    const title = 'Song';
    const coauthors = 'Human';
    const genreFeel = 'Jazz';
    const speed = 'slow';
    const key = 'G';
    const capo = '3';
    const strum = 'UDUDUD';
    const notes = 'Testing';

    before(function() {
        return runServer(TEST_DATABASE_URL);
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

    beforeEach(function() {
        return Dittie.create({
            title,
            coauthors,
            genreFeel,
            speed,
            timeSig,
            key,
            capo,
            strum,
            notes,
            content
        })
    });
    afterEach(function() {
        return User.deleteOne({});
    });

    afterEach(function() {
        return Dittie.deleteMany({});
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


    describe('/ditties', function() {

        const authToken = jwt.sign(
            {
                user: {
                    username,
                    firstName,
                    lastName
                }
            },
            JWT_SECRET,
            {
                algorithm: 'HS256',
                subject: username,
                expiresIn: '7d'
            }
        );

        it('should add a new song on POST', function(){
        
            const newDitty = {
                title: 'Test Title',
                coauthors: 'Test Person',
                genreFeel: 'Test Feel',
                speed: 'fast',
                timeSig: {
                    top: 4,
                    bottom: 4
                },
                key: 'C',
                capo: 1,
                strum: 'Test Strum',
                notes: 'Test Notes',
                content: [
                    {
                        sectionId: 1,
                        section: 'intro',
                        chords: 'Test Chords',
                        lyrics: 'Test Lyrics'
                    },
                    {
                        sectionId: 2,
                        section: 'verse',
                        chords: 'Test Chords',
                        lyrics: 'Test Lyrics'
                    }
                ]
            };
            const expectedKeys = ['_id'].concat(Object.keys(newDitty));

            return chai
                .request(app)
                .post('/ditties')
                .set('Authorization', `Bearer ${authToken}`)
                .send(newDitty)
                .then(function(res) {
                    expect(res).to.have.status(201);
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.contain.all.keys(expectedKeys);
                    expect(res.body.title).to.equal(newDitty.title);
                });
        });

        it('should return an error if missing expected values in POST', function () {
            const emptyData = {};
            return chai
                .request(app)
                .post("/ditties")
                .set('Authorization', `Bearer ${authToken}`)
                .send(emptyData)
                .then(function(res) {
                    expect(res).to.have.status(400);
                });
        });

        it('should list all ditties on GET', function() {
            return chai
                .request(app)
                .get('/ditties')
                .set('Authorization', `Bearer ${authToken}`)
                .then(function (res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    expect(res.body.ditties).to.be.an('array');
                    res.body.ditties.forEach(function(ditty){
                        expect(ditty).to.be.an('object');
                        expect(ditty).to.contain.keys(
                            '__v',
                            '_id',
                            'content',
                            'created',
                            'title'
                        );
                    })
                });
        });

        it('should GET a song by id', function() {
            //first get an id
            return Dittie
                .findOne()
                .then(function(ditty) {
                    let id = ditty._id;
        
                    return chai
                        .request(app)
                        .get(`/ditties/${id}`)
                        .set('Authorization', `Bearer ${authToken}`)
                        .then(function(res) {
                            expect(res).to.have.status(200);
                            expect(res).to.be.json;
                            expect(res.body).to.be.an('object');
                            expect(res.body).to.contain.keys(
                                '__v',
                                '_id',
                                'content',
                                'created',
                                'title'
                            );
                        })
                })

        });

        it('should edit ditties fields with PUT', function() {
            const newData = {
                title: 'Put Title',
                coauthors: 'Put Name'
            };

            return Dittie
                .findOne()
                .then(function(ditty) {
                    newData.id = ditty._id;
        
                    return chai
                        .request(app)
                        .put(`/ditties/${ditty._id}`)
                        .send(newData)
                        .set('Authorization', `Bearer ${authToken}`);
                })
                .then(function(res) {
                    expect(res).to.have.status(204);
                    return Dittie.findById(newData.id);
                })
                .then(function(putDitty) {
                    expect(putDitty.title).to.equal(newData.title);
                    expect(putDitty.coauthors).to.equal(newData.coauthors);
                        
                });

        });

        it('should DELETE ditty by id', function() {

            return Dittie
                .findOne()
                .then(function(ditty) {
                    let id = ditty._id;
                    
                    return chai
                        .request(app)
                        .delete(`/ditties/${id}`)
                        .set('Authorization', `Bearer ${authToken}`)
                        .then(function(res) {
                            expect(res).to.have.status(204);
                        
                            return Dittie
                                .findById(id);
                        })
                        .then(function(ditty) {
                            expect(ditty).to.be.null;
                        });
                });
        });
    });
                
});