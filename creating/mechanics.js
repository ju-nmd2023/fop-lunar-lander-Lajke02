//Setting up screen:
function setup() {
  createCanvas(800, 500);
  frameRate(30);
}


//Overall variables
let gameIsRunning = true;
let gameMode = "startscreen";
let landingY = 380;

let crowHasLanded;
let results;

function startScreen() {
  fill(255, 255, 255);
  rect(200, 150, 400, 200, 20);
}

function gameBackground() {
  fill(211, 211, 255);
  rect(0, 0, 800, 500);
}

function ground() {
  fill(100, 100, 100);
  rect(0, 400, 800, 100);
}

//crowthings

const crowThings = { x: 200, y: 10, velocity: 0.5, acceleration: 0.1 };

function crow(x, y) {
  push();
  translate(x, y);
  fill(0, 0, 0);
  ellipse(100, 0, 20);
  pop();
}

function wonGame() {
  push();
  fill(255, 255, 255);
  rect(200, 150, 400, 200, 20);
  fill(0, 0, 255);
  textSize(30);
  text("You Won!", 300, 170, 200, 300);
  textSize(20);
  text(results, 225, 225, 200, 400);
  pop();
}

function lostGame() {
  push();
  fill(255, 255, 255);
  rect(200, 150, 400, 200, 20);
  fill(0, 0, 255);
  textSize(30);
  text("You Lost!", 300, 170, 200, 300);
  textSize(20);
  text(results, 225, 225, 200, 400);
  pop();
}

//draw function coming up -->

function draw() {
  //startscreen

  if (gameMode === "startscreen") {
    noStroke();
    gameBackground();
    startScreen();
  }
  // Click S to start
  if (gameMode === "startscreen" && keyIsPressed === true && keyCode === 83) {
    gameMode = "gamescreen";
  }
  if (gameMode === "gamescreen") {
    noStroke();
    gameBackground();
    ground();
    crow(crowThings.x, crowThings.y);
    gameIsRunning = true;

    if (gameIsRunning) {
      crowThings.y = crowThings.y + crowThings.velocity;
      crowThings.velocity = crowThings.velocity + crowThings.acceleration;

      //CROW CONTROLS
      //Press space bar to fly up
      if (keyIsDown(38)) {
        crowThings.velocity = crowThings.velocity - 0.2;
      }
      // Press left arrow key to fly to the left
      if (keyIsDown(37)) {
        crowThings.x = crowThings.x - 1;
      }
      // Press right arrow key to fly to the right
      if (keyIsDown(39)) {
        crowThings.x = crowThings.x + 1;
      }
      //winning the game
      if (crowThings.y > landingY && crowThings.velocity <= 2) {
        wonGame();
        results =
          "Thanks for flying to safety! You definetely deserve some cake :)";
        gameIsRunning = false;
        gameMode = "endscreen";
        console.log("Won!");
      }

      //losing the game
      if (crowThings.y > landingY && crowThings.velocity > 2) {
        gameMode = "endscreen";
        lostGame();
        results = "Awww schucks... broken legs = no invite... ;(";
        gameIsRunning = false;
        console.log("Gameover");
      }
      if (gameMode === "endscreen") {
        noStroke();
        gameBackground();
      }
    }
  }
}
