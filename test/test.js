<<<<<<< HEAD
var request = require('supertest');
var app = require('../index.js');
 
describe('GET /', function() {
  it('respond with 404 page not found', function(done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          // If there's an error, log it and pass it to the done callback
          console.error(err);
          return done(err);
        }
        // If everything is fine, invoke the done callback
        done();
      });
  });
});
=======
var request = require('supertest');
var app = require('../index.js');
 
describe('GET /', function() {
  it('respond with 404 page not found', function(done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          // If there's an error, log it and pass it to the done callback
          console.error(err);
          return done(err);
        }
        // If everything is fine, invoke the done callback
        done();
      });
  });
});
>>>>>>> 7df0eff773036ddcc0b8b2986370e62fde3b7dec
