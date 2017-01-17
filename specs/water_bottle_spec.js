var originalBottle = require("../water_bottle");
var assert = require("assert");

describe("Water Bottle", function(){
  var bottle;

  beforeEach(function(){
    bottle = Object.create(originalBottle);
  })

  it("should be empty at the start", function(){
    assert.equal(0, bottle.volume);
  });
  it("Should go to 100 when filled", function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  it("Should go down by 10 when drank", function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume);
  });
  it("Should go to 0 when emptied", function() {
    bottle.fill();
    bottle.empty();
    assert.equal(0, bottle.volume);
  });
  it("Should not be able to go below 0", function() {
    bottle.empty();
    bottle.drink();
    assert.equal(0, bottle.volume);
  })

});