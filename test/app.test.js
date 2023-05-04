const assert = require('assert')
const request = require('supertest')
const app = require('../app')

describe('GET /', function() {
  it('responds with "Hello World!"', function() {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        assert.strictEqual(res.text, 'Hello World!')
      })
  })
})