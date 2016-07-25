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
  if (robot1.health <= 0) {
    winnerAnnouncement(robot2);
  } else if (robot2.health <= 0) {
    winnerAnnouncement(robot1);
  }
};

let winnerAnnouncement = (robot) => {
  $("#attackButton").attr("disabled", true);
  $("#winner").html(`The winner is ${robot.playerName} with the ${robot.name} using ${robot.attack}`);
  $("#reset").removeClass("hidden");
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
  $("#attackButton").attr("disabled", false);
}

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
}

let fightReady = $("#fightReady").click(fillPlayers);
let attackButton = $("#attackButton").click(attack);
let resetButton = $("#reset").click(reset);








