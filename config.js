'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/diddies-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-diddies-app';
exports.PORT = process.env.PORT || 8080;