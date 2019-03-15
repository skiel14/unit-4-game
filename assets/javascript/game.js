// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.

// alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
// alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");

var randNum = Math.floor(Math.random() * (120-19+1)) + 19;
$("#rand-num").html(randNum);

var chest1 = Math.floor(Math.random() * 12) +  1;
var chest2 = Math.floor(Math.random() * 12) +  1;
var chest3 = Math.floor(Math.random() * 12) +  1;
var chest4 = Math.floor(Math.random() * 12) +  1;

var score=0, wins=0, losses=0;
$("#score").html(score);
$("#wins").html(wins);
$("#losses").html(losses);

function progress() {
  var prog = (score/randNum)*100;
  $("#pBar").html('<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="'+prog+'" aria-valuemin="0" aria-valuemax="100" style="width: '+prog+'%"></div>');
}

function check() {
  if(score>randNum) {
    losses++;
    $("#losses").html(losses);
    alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
    randNum = Math.floor(Math.random() * (120-19+1)) + 19;
    chest1 = Math.floor(Math.random() * 12) +  1;
    chest2 = Math.floor(Math.random() * 12) +  1;
    chest3 = Math.floor(Math.random() * 12) +  1;
    chest4 = Math.floor(Math.random() * 12) +  1;
    score=0;
    progress();
    $("#score").html(score);
    $("#rand-num").html(randNum);
  } else if(score==randNum) {
    wins++;
    $("#wins").html(wins);
    alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");
    randNum = Math.floor(Math.random() * (120-19+1)) + 19;
    chest1 = Math.floor(Math.random() * 12) +  1;
    chest2 = Math.floor(Math.random() * 12) +  1;
    chest3 = Math.floor(Math.random() * 12) +  1;
    chest4 = Math.floor(Math.random() * 12) +  1;
    score=0;
    progress();
    $("#score").html(score);
    $("#rand-num").html(randNum);
  }
}

$("#chest1").click(function() {
  score+=chest1;
  $("#score").html(score);
  progress();
  check();
});

$("#chest2").click(function() {
  score+=chest2;
  $("#score").html(score);
  progress();
  check();
});

$("#chest3").click(function() {
  score+=chest3;
  $("#score").html(score);
  progress();
  check();
});

$("#chest4").click(function() {
  score+=chest4;
  $("#score").html(score);
  progress();
  check();
});
