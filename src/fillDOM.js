"use strict";

let Robot = require("./Robot");
let viewChange = require("./viewChange");

let typeSelects = $(".robot-options");
let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");


let fillSelectOptions = () => {
  for (let i = 0; i < Robot.botArray.length; i++) {
    let newTypeOption = $("<option>").attr("id", `${Robot.botArray[i].type}`).html( `${Robot.botArray[i].name}`);
    typeSelects.append(newTypeOption);
  }
};

let fillAttackScreen = (robot, robotBox) => {
  robotBox.empty();
  let playerName = $("<h2>").html(`Player Name: ${robot.playerName}`);
  let robotType = $("<h3>").html(`Robot Type: ${robot.name}`);
  let robotHealth = $("<h4>").html(`Robot Health: ${robot.health}`);
  let robotAttack = $("<h4>").html(`Attack: ${robot.attack}`);
  let robotDamage = $("<h4>").html(`Damage: ${robot.damage}`);
  robotBox.append(playerName, robotType, robotHealth, robotAttack, robotDamage);
};


let winnerAnnouncement = (robot) => {
  $("#attackButton").attr("disabled", true);
  $("#winner").html(`The winner is ${robot.playerName} with the ${robot.name} using ${robot.attack}`);
  $("#reset").removeClass("hidden");
};


module.exports = {
  fillSelectOptions, winnerAnnouncement, fillAttackScreen
};




