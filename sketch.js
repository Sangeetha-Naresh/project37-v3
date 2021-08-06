var canvas, backgroundImage;

var gameState = 0;
var contestantCount;//playerCount
var allContestants;//allPlayers
var answer; //distance
var database;

var question, contestant, quiz;
//   form       player     game


function setup()
{
  canvas = createCanvas(850,400);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw()
{
  background("pink");

  if(contestantCount === 4)
  {
    quiz.update(1);
  }
  if(gameState === 1)
  {
    clear();
    quiz.play();
  }
}
