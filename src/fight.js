"use strict";

let fillDOM = require("./fillDOM");
let Robot = require("./Robot");
let viewChange = require("./viewChange");

let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");
let playerInput1 = $("#player1");
let playerInput2 = $("#player2");

let robot1;
let robot2;

let attack = () => {
  robot1.health = robot1.health - robot2.damage;
  robot2.health = robot2.health - robot1.damage;
  fillDOM.fillAttackScreen(robot1, fightRobot1);
  fillDOM.fillAttackScreen(robot2, fightRobot2);
  if (robot1.health <= 0) {
    fillDOM.winnerAnnouncement(robot2);
  } else if (robot2.health <= 0) {
    fillDOM.winnerAnnouncement(robot1);
  }
};
let fillPlayers = () => {
  let selectRobot1 = $("#select1 option:selected").attr("id");
  for ( let key in Robot) {
    if ( key === selectRobot1 ) {
      robot1 = new Robot[key]();
    }
  }
  robot1.playerName = playerInput1.val();

  let selectRobot2 = $("#select2 option:selected").attr("id");
  for ( let key in Robot) {
    if ( key === selectRobot2 ) {
      robot2 = new Robot[key]();
    }
  }
  robot2.playerName = playerInput2.val();
  viewChange.showAttackScreen();
  fillDOM.fillAttackScreen(robot1, fightRobot1);
  fillDOM.fillAttackScreen(robot2, fightRobot2);
};

let setEvents = () => {
  let fightReady = $("#fightReady").click(fillPlayers);
  let attackButton = $("#attackButton").click(attack);
  let resetButton = $("#reset").click(viewChange.reset);
};

module.exports = {
  attack, setEvents, fillPlayers
};
