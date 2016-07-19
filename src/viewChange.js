"use strict";

let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");
let playerInput1 = $("#player1");
let playerInput2 = $("#player2");

//  switch to attack screen
let showAttackScreen = () => { 
  $("#attackButton").removeClass("hidden");
  $("#fightReady").addClass("hidden");
  $("#makeRobot1").addClass("hidden");
  $("#makeRobot2").addClass("hidden");
  $("#attackButton").attr("disabled", false);
};

let reset = () => {
  $("#fightReady").removeClass("hidden");
  $("#makeRobot1").removeClass("hidden");
  $("#makeRobot2").removeClass("hidden");
  $("#attackButton").addClass("hidden");
  $("#reset").addClass("hidden");
  playerInput1.val("");
  playerInput2.val("");
  fightRobot1.empty();
  fightRobot2.empty();
  $("#winner").empty();
};

module.exports = {
  showAttackScreen, reset
};


