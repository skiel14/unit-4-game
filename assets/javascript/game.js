// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.

// alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
// alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");

var randNum = Math.floor(Math.random() * 120-19+1) + 19;
$("#rand-num").html(randNum);

var red = Math.floor(Math.random() * 12) +  1;
var blue = Math.floor(Math.random() * 12) +  1;
var yellow = Math.floor(Math.random() * 12) +  1;
var green = Math.floor(Math.random() * 12) +  1;

var score=0, wins=0, losses=0;
$("#score").html(score);
$("#wins").html(wins);
$("#losses").html(losses);

$("#red").click(function() {
  score+=red;
  $("#score").html(score);
  if(score>randNum) {
    losses++;
    $("#losses").html(losses);
    alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0
    $("#score").html(score);
    $("#rand-num").html(randNum);
  } else if(score==randNum) {
    wins++;
    $("#wins").html(wins);
    alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0
    $("#score").html(score);
    $("#rand-num").html(randNum);
  }
});

$("#blue").click(function() {
  score+=blue;
  $("#score").html(score);
  if(score>randNum) {
    losses++;
    $("#losses").html(losses);
    alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0;
    $("#score").html(score);
    $("#rand-num").html(randNum);
  } else if(score==randNum) {
    wins++;
    $("#wins").html(wins);
    alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0;
    $("#score").html(score);
    $("#rand-num").html(randNum);
  }
});

$("#yellow").click(function() {
  score+=yellow;
  $("#score").html(score);
  if(score>randNum) {
    losses++;
    $("#losses").html(losses);
    alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0;
    $("#score").html(score);
    $("#rand-num").html(randNum);
  } else if(score==randNum) {
    wins++;
    $("#wins").html(wins);
    alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0;
    $("#score").html(score);
    $("#rand-num").html(randNum);
  }
});

$("#// green").click(function() {
  score+=green;
  $("#score").html(score);
  if(score>randNum) {
    losses++;
    $("#losses").html(losses);
    alert("You get... NOTHING!!! You lose! GOOD DAY, SIR!\nYour score was "+score+" and you needed to get "+randNum+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0;
    $("#score").html(score);
    $("#rand-num").html(randNum);
  } else if(score==randNum) {
    wins++;
    $("#wins").html(wins);
    alert("Winner, Winner, Chicken Dinner!\nYour matched the score of "+score+".");
    randNum = Math.floor(Math.random() * 120-19+1) + 19;
    red = Math.floor(Math.random() * 12) +  1;
    blue = Math.floor(Math.random() * 12) +  1;
    yellow = Math.floor(Math.random() * 12) +  1;
    green = Math.floor(Math.random() * 12) +  1;
    score=0;
    $("#score").html(score);
    $("#rand-num").html(randNum);
  }
});
