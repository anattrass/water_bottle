var originalBottle = require("../water_bottle");
var athlete = require("../athlete");
var assert = require("assert");

describe("Athlete", function(){
  var bottle;

  beforeEach(function(){
    bottle = Object.create(originalBottle);
  })

  it("should have a hydration attribute that starts at 100", function() {
    assert.equal(100, athlete.hydration);
  });
  it("should have a distance covered attribute starts at 0", function() {
    assert.equal(0, athlete.distance)
  });
  it("should be able to run: increasing distance, decreasing hydration", function() {
    athlete.run();
    assert.equal(90, athlete.hydration);
    assert.equal(10, athlete.distance);
  });
  it("should not move when running dehydrated: hydration at 0", function() {
    athlete.hydration = 0;
    athlete.run();
    assert.equal(0, athlete.hydration);
    assert.equal(10, athlete.distance);
  });
  it("should be able to increase hydration by drinking from water bottle", function() {
    bottle.fill();

    athlete.drink(bottle);

    assert.equal(10, athlete.hydration);
    assert.equal(90, bottle.volume);
  });
})