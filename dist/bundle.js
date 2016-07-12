(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Robot = function () {
  this.robot = true;
  this.model = null;
  this.type = null;
};

// types of robots

var FireBots = function () {
  this.model = "Fire Bot";
  this.attack = "Burning things";
};

FireBots.prototype = new Robot();

var WaterBots = function () {
  this.model = "Water Bot";
  this.attack = "Watering things";
};

WaterBots.prototype = new Robot();

var TankBots = function () {
  this.model = "Tank Bot";
  this.attack = "Exploding things"
};

TankBots.prototype = new Robot();

// types of robotos

// firebot types

var WeldingBot = function () {
  this.type = "WeldingBot";
  this.name = "Welding Bot";
  this.attack = "Welding";
  this.health = Math.floor(Math.random() * (100 - 80) + 80);
  this.damage = Math.floor(Math.random() * (20 - 10) + 10);
};

WeldingBot.prototype = new FireBots();
let weldingBot = new WeldingBot();

var DragonBot = function () {
  this.type = "DragonBot";
  this.name = "Dragon Bot";
  this.attack = "Breathing Fire";
  this.health = Math.floor(Math.random() * (110 - 90) + 90);
  this.damage = Math.floor(Math.random() * (25 - 15) + 15);
};

DragonBot.prototype = new FireBots();
let dragonBot = new DragonBot();

// types of waterbots

var DolphinBot = function () {
  this.type = "DolphinBot";
  this.name = "Dolphin Bot";
  this.attack = "splash attack";
  this.health = Math.floor(Math.random() * (90 - 70) + 70);
  this.damage = Math.floor(Math.random() * (35 - 10) + 10);
};

DolphinBot.prototype = new WaterBots();
let dolphinBot = new DolphinBot();

var CrabBot = function () {
  this.type = "CrabBot";
  this.name = "Crab Bot";
  this.attack = "Pinching things";
  this.health = Math.floor(Math.random() * (80 - 60) + 60);
  this.damage = Math.floor(Math.random() * (40 - 10) + 10);
};

CrabBot.prototype = new WaterBots();
let crabBot = new CrabBot();

// types of tank bots

var BearBot = function () {
  this.type = "BearBot";
  this.name = "Bear Bot";
  this.attack = "Bear Hugs";
  this.health = Math.floor(Math.random() * (130 - 100) + 100);
  this.damage = Math.floor(Math.random() * (50 - 10) + 10);
};

BearBot.prototype = new TankBots();
let bearBot = new BearBot();

var OptimusBot = function () {
  this.type = "OptimusBot";
  this.name = "Optimus Bot";
  this.attack = "trucking";
  this.health = Math.floor(Math.random() * (120 - 70) + 70);
  this.damage = Math.floor(Math.random() * (45 - 10) + 10);

};

OptimusBot.prototype = new TankBots();
let optimusBot = new OptimusBot();


let botArray = [weldingBot, dragonBot, dolphinBot, crabBot, bearBot, optimusBot];


module.exports = {
  WeldingBot, DragonBot, DolphinBot, CrabBot, BearBot, OptimusBot, botArray
};
















},{}],2:[function(require,module,exports){
"use strict";

let BattleBots = require("./main");
let Dragon = new BattleBots.Robot.DragonBot();

let robot1;
let robot2;

let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");

let playerInput1 = $("#player1");
let playerInput2 = $("#player2");

let typeSelects = $(".robot-options");

console.log(BattleBots.Robot.botArray);


for (let i = 0; i < BattleBots.Robot.botArray.length; i++) {
  let newTypeOption = $("<option>").attr("id", `${BattleBots.Robot.botArray[i].type}`).html( `${BattleBots.Robot.botArray[i].name}`);
  typeSelects.append(newTypeOption);
}

let fillPlayers = () => {
  console.log("select1", $("#select1 option:selected").attr("id"));
  console.log("select2", $("#select2 option:selected").attr("id"));
  
  let selectRobot1 = $("#select1 option:selected").attr("id");

  for ( let key in BattleBots.Robot) {
    if ( key === selectRobot1 ) {
      robot1 = new BattleBots.Robot[key]();
    }
  }

  robot1.playerName = playerInput1.val();

  let selectRobot2 = $("#select2 option:selected").attr("id");

  for ( let key in BattleBots.Robot) {
    if ( key === selectRobot2 ) {
      robot2 = new BattleBots.Robot[key]();
    }
  }
    robot2.playerName = playerInput2.val();

    showAttackScreen();
    fillAttackScreen(robot1, fightRobot1);
    fillAttackScreen(robot2, fightRobot2);
};

let attack = () => {
  robot1.health = robot1.health - robot2.damage;
  robot2.health = robot2.health - robot1.damage;
  fillAttackScreen(robot1, fightRobot1);
  fillAttackScreen(robot2, fightRobot2);
};

let fillAttackScreen = (robot, robotBox) => {
  robotBox.empty();
  let playerName = $("<h2>").html(`Player Name: ${robot.playerName}`);
  let robotType = $("<h3>").html(`Robot Type: ${robot.name}`);
  let robotHealth = $("<h4>").html(`Robot Health: ${robot.health}`);
  let robotAttack = $("<h4>").html(`Attack: ${robot.attack}`);
  let robotDamage = $("<h4>").html(`Damage: ${robot.damage}`);
robotBox.append(playerName, robotType, robotHealth, robotAttack, robotDamage);

}
//  switch to attack screen
let showAttackScreen = () => { 
  $("#attackButton").removeClass("hidden");
  $("#fightReady").addClass("hidden");
  $("#makeRobot1").addClass("hidden");
  $("#makeRobot2").addClass("hidden");
}


let fightReady = $("#fightReady").click(fillPlayers);
let attackButton = $("#attackButton").click(attack);









},{"./main":3}],3:[function(require,module,exports){
"use strict";

let Robot = require("./Robot");

module.exports = {
  Robot
}








},{"./Robot":1}]},{},[2])


//# sourceMappingURL=bundle.js.map
