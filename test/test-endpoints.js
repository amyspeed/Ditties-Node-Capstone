'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, runServer, closeServer } = require('../server');
const { TEST_DATABASE_URL, JWT_SECRET } = require('../config');
const { User } = require('../users/models')
const jwt = require('jsonwebtoken');

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
});

// describe('Get Ditties', function() {
//     const username = 'testName';
//     const password = 'textWord';

//     before(function() {
//         return runServer(TEST_DATABASE_URL);
//     });
//     after(function() {
//         return closeServer();
//     });
//     beforeEach(function() {
//         return User.hashPassword(password)
//             .then(password =>
//                 User.create({
//                     username,
//                     password,
//                 })
//         );
//     });
//     afterEach(function() {
//         return User.remove({});
//     });

//     it('should list all ditties on GET', function() {
//         const authToken = jwt.sign(
//             {
//                 username,
//             },
//             JWT_SECRET,
//             {
//                 algorithm: 'HS256',
//                 expiresIn: '7d'
//             }
//         );

//         return chai
//             .request(app)
//             .get('/ditties')
//             .set('Authorization', `Bearer ${authToken}`)
//             .then(function (res) {
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.an('array');
//                 res.body.forEach(function(ditty) {
//                     expect(ditty).to.be.an('object');
//                     expect(ditty).to.have.keys(
//                         'id',
//                         'title',
//                         'user'
//                     );
//                 });
//             });
//     });

// });