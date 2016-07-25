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















