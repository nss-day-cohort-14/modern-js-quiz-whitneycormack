"use strict";

const Robot = require("../src/Robot");

describe('Robot specs', function() { 
  let testRobot = new Robot.WeldingBot();
  console.log(testRobot);
  it('Robot should be defined', function() {
    expect(testRobot).toBeDefined();
  });
});


