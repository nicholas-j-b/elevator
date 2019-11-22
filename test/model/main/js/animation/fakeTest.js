var assert = require('assert');

var fake = require('../../../../../src/model/src/main/js/animation/fake')
var expect = require('chai').expect

describe('test1', function () {
  it('should all be good', function() {
    expect(fake.debug_test_function(3)).to.equal(3);
  })
})

function test1() {
  it('should return "good" when sending "good"', function() {
    const result = this.test.ctx.fake.debug_test_function('good');
    assert.strictEqual(result, 'good');
  });
}