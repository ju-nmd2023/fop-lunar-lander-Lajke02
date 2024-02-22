//Setting up screen:
function setup() {
  createCanvas(800, 500);
  frameRate(30);
}

//Overall variables
let gameIsRunning = true;
let gameMode = "startscreen";
let landingY = 350;
let results;

//startscreen graphics
function startScreen() {
  push();
  fill(255, 255, 255);
  rect(200, 150, 400, 200, 20);
  rect(625, 150, 150, 200, 20);
  rect(25, 150, 150, 200, 20);

  fill(255, 123, 177);
  rect(240, 180, 10, 30);
  rect(250, 170, 20, 10);
  rect(250, 210, 20, 10);

  //title
  fill(0, 0, 0);
  rect(280, 180, 5, 40);
  rect(280, 180, 20, 5);
  rect(300, 185, 5, 15);
  rect(280, 200, 20, 5);
  rect(300, 205, 5, 15);

  rect(320, 180, 20, 5);
  rect(315, 185, 5, 30);
  rect(340, 185, 5, 30);
  rect(320, 215, 20, 5);
  rect(355, 180, 5, 35);
  rect(370, 180, 5, 35);
  rect(385, 180, 5, 35);
  rect(360, 215, 10, 5);
  rect(375, 215, 10, 5);

  rect(385, 225, 5, 35);
  rect(390, 260, 20, 5);
  rect(405, 230, 5, 25);
  rect(425, 230, 5, 35);
  rect(410, 225, 15, 5);
  rect(410, 245, 15, 5);
  rect(440, 225, 5, 40);
  rect(460, 225, 5, 40);
  rect(445, 225, 5, 10);
  rect(450, 235, 5, 10);
  rect(455, 245, 5, 10);

  rect(475, 225, 5, 40);
  rect(475, 225, 15, 5);
  rect(475, 260, 15, 5);
  rect(490, 230, 5, 30);

  rect(505, 225, 5, 40);
  rect(505, 225, 20, 5);
  rect(505, 240, 15, 5);
  rect(505, 260, 20, 5);

  rect(535, 225, 5, 40);
  rect(535, 225, 15, 5);
  rect(550, 230, 5, 15);
  rect(535, 245, 15, 5);
  rect(550, 250, 5, 15);
  pop();

  //Click to start
  push();
  fill(0, 0, 0);
  textSize(30);
  text("Click S to start", 300, 290, 500, 200);
  pop();

  //Rules & description
  push();
  fill(0, 0, 0);
  textSize(30);
  text("Rules", 660, 165, 100, 50);
  pop();

  push();
  fill(0, 0, 0);
  textSize(14);
  text(
    "Use the space key to fly higher and the arrow keys to steer. Land gently on the ground or on the food in the tree.",
    635,
    210,
    140,
    300
  );
  text(
    "The crow is having his birthday party but first he needs to get down safely. Help the crow get down without hurting him to invited to his party too :)",
    35,
    180,
    140,
    300
  );
  pop();
}

// background graphics
function gameBackground() {
  noStroke();
  //sky
  background(209, 238, 255);
  //color 1
  push();
  fill(171, 225, 255);
  rect(0, 200, 800, 300);
  rect(0, 150, 250, 100);
  rect(0, 120, 50, 100);
  rect(50, 90, 70, 100);
  rect(120, 110, 70, 100);
  rect(280, 170, 400, 100);
  rect(320, 100, 280, 100);
  rect(700, 150, 100, 100);
  rect(360, 60, 150, 100);
  rect(540, 80, 60, 100);
  rect(610, 120, 30, 100);
  //small details
  rect(0, 110, 20, 100);
  rect(0, 100, 10, 100);
  rect(40, 110, 100, 10);
  rect(60, 80, 50, 10);
  rect(120, 100, 60, 10);
  rect(130, 90, 40, 10);
  rect(190, 140, 50, 10);
  rect(190, 130, 40, 10);
  rect(250, 170, 10, 40);
  rect(270, 180, 10, 40);
  rect(290, 160, 30, 40);
  rect(310, 110, 10, 50);
  rect(330, 90, 30, 40);
  rect(350, 70, 170, 40);
  rect(520, 80, 10, 40);
  rect(550, 70, 40, 40);
  rect(600, 100, 10, 70);
  rect(600, 90, 10, 40);
  rect(610, 110, 20, 40);
  rect(640, 150, 20, 40);
  rect(640, 160, 30, 40);
  rect(690, 160, 20, 40);
  rect(710, 140, 90, 40);
  rect(720, 130, 90, 40);
  pop();
  //color 2
  push();
  fill(123, 208, 255);
  rect(0, 400, 100, 200);
  rect(50, 350, 300, 200);
  rect(0, 400, 800, 200);
  rect(100, 300, 100, 200);
  rect(240, 330, 80, 200);
  rect(400, 200, 200, 300);
  rect(500, 250, 200, 300);
  rect(700, 300, 200, 300);
  rect(730, 270, 200, 300);
  rect(370, 230, 200, 150);
  rect(50, 170, 80, 80);
  rect(600, 220, 40, 30);

  //small details
  rect(10, 390, 40, 100);
  rect(40, 360, 40, 100);
  rect(30, 380, 40, 100);
  rect(80, 320, 40, 100);
  rect(90, 310, 120, 100);
  rect(210, 320, 10, 100);
  rect(230, 340, 100, 100);
  rect(250, 320, 60, 100);
  rect(350, 360, 10, 100);
  rect(360, 390, 10, 100);
  rect(380, 380, 20, 10);
  rect(360, 240, 10, 110);
  rect(350, 250, 10, 90);
  rect(340, 260, 10, 70);
  rect(390, 210, 10, 90);
  rect(410, 190, 180, 10);
  rect(640, 230, 10, 90);
  rect(650, 240, 10, 90);
  rect(700, 260, 10, 30);
  rect(720, 280, 10, 30);
  rect(740, 260, 50, 30);
  rect(60, 160, 60, 60);
  rect(40, 180, 60, 60);
  rect(60, 250, 60, 10);
  rect(130, 180, 10, 60);
  pop();
}

//ground hahaha, pretty selfexplanatory
function ground() {
  fill(81, 200, 75);
  rect(0, 400, 800, 100);
  fill(69, 167, 64);
  rect(110, 430, 5, 30);
  rect(120, 440, 5, 20);
  rect(105, 425, 5, 5);
  rect(125, 435, 5, 5);

  push();
  fill(69, 167, 64);
  translate(-60, -50);
  rect(110, 430, 5, 30);
  rect(120, 440, 5, 20);
  rect(105, 425, 5, 5);
  rect(125, 435, 5, 5);
  pop();

  push();
  fill(69, 167, 64);
  translate(120, -40);
  rect(110, 430, 5, 30);
  rect(120, 440, 5, 20);
  rect(105, 425, 5, 5);
  rect(125, 435, 5, 5);
  pop();

  push();
  fill(69, 167, 64);
  translate(300, 10);
  rect(110, 430, 5, 30);
  rect(120, 440, 5, 20);
  rect(105, 425, 5, 5);
  rect(125, 435, 5, 5);
  pop();

  push();
  fill(69, 167, 64);
  translate(400, -50);
  rect(110, 430, 5, 30);
  rect(120, 440, 5, 20);
  rect(105, 425, 5, 5);
  rect(125, 435, 5, 5);
  pop();

  push();
  fill(69, 167, 64);
  translate(600, -20);
  rect(110, 430, 5, 30);
  rect(120, 440, 5, 20);
  rect(105, 425, 5, 5);
  rect(125, 435, 5, 5);
  pop();
}

//crowthings

const crowThings = { x: 400, y: 10, velocity: 0.5, acceleration: 0.1 };

function crow(x, y) {
  push();
  translate(x, y);

  //body
  fill(0, 0, 0, 30);

  fill(35, 36, 37);
  rect(-10, 10, 20, 30);
  rect(-15, 15, 5, 20);
  rect(10, 15, 5, 20);
  rect(-60, 40, 120, 20);
  rect(-50, 60, 100, 10);
  rect(-40, 70, 80, 10);
  rect(-30, 80, 60, 10);
  rect(-10, 90, 20, 10);

  rect(-65, 40, 5, 5);
  rect(60, 40, 5, 5);
  fill(135, 139, 141);
  rect(-30, 40, 60, 10);
  rect(-20, 50, 40, 20);
  rect(-10, 60, 20, 20);

  //beak
  fill(0, 0, 0);
  rect(-5, 25, 10, 5);
  //eyes
  rect(-12, 20, 5, 5);
  rect(8, 20, 5, 5);
  fill(255, 245, 255);
  rect(-12, 20, 2, 2);
  rect(8, 20, 2, 2);

  //legs
  fill(0, 0, 0);
  rect(-10, 80, 5, 20);
  rect(-15, 100, 5, 5);
  rect(5, 80, 5, 20);
  rect(10, 100, 5, 5);
  pop();
}

//winning screen
function wonGame() {
  //ballons
  push();
  translate(-350, -20);
  fill(180, 252, 246);
  rect(500, 0, 150, 50);
  rect(650, 40, 10, -40);
  rect(500, 50, 140, 10);
  rect(510, 60, 120, 10);
  rect(520, 70, 100, 10);
  rect(560, 90, 30, 10);
  rect(500, 50, -10, -50);
  rect(490, 40, -10, -40);
  pop();

  push();
  translate(100, -20);
  fill(180, 252, 246);
  rect(500, 0, 150, 50);
  rect(650, 40, 10, -40);
  rect(500, 50, 140, 10);
  rect(510, 60, 120, 10);
  rect(520, 70, 100, 10);
  rect(560, 90, 30, 10);
  rect(500, 50, -10, -50);
  rect(490, 40, -10, -40);
  pop();

  push();
  fill(255, 123, 177);
  rect(0, 0, 150, 50);
  rect(150, 40, 10, -40);
  rect(0, 50, 140, 10);
  rect(10, 60, 120, 10);
  rect(20, 70, 100, 10);
  rect(60, 90, 30, 10);
  pop();

  push();
  fill(255, 123, 177);
  rect(500, 0, 150, 50);
  rect(650, 40, 10, -40);
  rect(500, 50, 140, 10);
  rect(510, 60, 120, 10);
  rect(520, 70, 100, 10);
  rect(560, 90, 30, 10);
  rect(500, 50, -10, -50);
  rect(490, 40, -10, -40);
  pop();
  //strings
  push();
  fill(0, 0, 0);
  rect(65, 80, 20, 10);
  rect(215, 60, 20, 10);
  rect(565, 80, 20, 10);
  rect(665, 60, 20, 10);
  rect(70, 100, 10, 40);
  rect(60, 140, 10, 20);
  rect(70, 160, 10, 40);
  rect(70, 240, 10, 40);
  rect(60, 280, 10, 20);
  rect(220, 80, 10, 30);
  rect(210, 110, 10, 20);
  rect(220, 130, 10, 30);
  rect(570, 100, 10, 10);
  rect(560, 110, 10, 20);
  rect(570, 130, 10, 30);
  rect(670, 80, 10, 50);
  rect(660, 130, 10, 20);
  rect(670, 150, 10, 50);
  rect(670, 280, 10, 30);
  rect(680, 310, 10, 10);

  pop();

  // Crow winning

  //Head
  fill(35, 36, 37);
  rect(340, 50, 100, 90);
  rect(350, 40, 80, 10);
  rect(330, 60, 10, 80);
  rect(340, 140, 90, 10);

  //eyes
  fill(0, 0, 0);
  rect(370, 75, 20, 20);
  rect(420, 75, 20, 20);
  fill(295, 255, 255);
  rect(380, 80, 5, 5);
  rect(430, 80, 5, 5);

  //beak
  fill(0, 0, 0);
  rect(395, 100, 60, 10);
  rect(405, 110, 60, 10);
  rect(455, 120, 10, 5);

  //wings
  //left wing
  push();
  fill(35, 36, 37);
  rect(200, 165, -50, 130);
  rect(150, 165, -40, 110);
  rect(110, 165, -30, 90);
  rect(80, 185, -30, 50);
  rect(160, 295, 40, 10);
  rect(120, 275, 30, 10);
  rect(90, 255, 20, 10);
  rect(60, 235, 20, 10);
  rect(50, 195, -10, 30);
  rect(60, 185, 20, -10);

  //right wing
  fill(35, 36, 37);
  rect(600, 165, 50, 130);
  rect(650, 165, 40, 110);
  rect(690, 165, 30, 90);
  rect(720, 185, 30, 50);
  rect(600, 295, 40, 10);
  rect(650, 275, 30, 10);
  rect(690, 255, 20, 10);
  rect(720, 235, 20, 10);
  rect(750, 195, 10, 30);
  rect(720, 185, 20, -10);
  pop();

  push();
  translate(20, 0);
  //tailfeathers
  fill(35, 36, 37);
  rect(360, 350, 50, 80);
  rect(330, 350, 30, 70);
  rect(410, 350, 30, 70);
  rect(300, 350, 30, 50);
  rect(440, 350, 30, 50);
  rect(270, 350, 30, 30);
  rect(470, 350, 30, 30);
  rect(260, 350, 10, 20);
  rect(310, 400, 20, 10);
  rect(370, 430, 30, 10);
  rect(500, 350, 10, 20);
  rect(440, 400, 20, 10);

  //legs
  fill(0, 0, 0);
  rect(430, 360, 10, 90);
  rect(450, 400, 10, 40);
  rect(410, 400, 10, 40);
  rect(420, 390, 30, 10);

  rect(330, 360, 10, 90);
  rect(350, 400, 10, 40);
  rect(310, 400, 10, 40);
  rect(320, 390, 30, 10);

  pop();

  //party hat

  fill(223, 36, 255);
  rect(330, 80, -10, -40);
  rect(340, 60, -10, -30);
  rect(350, 50, -10, -30);
  rect(430, 40, -80, -20);
  rect(430, 30, 10, 20);
  rect(300, 0, 20, 20);
  rect(320, 5, 5, 5);
  rect(305, 20, 5, 5);
  rect(295, 20, 5, 5);
  rect(295, 0, 5, 10);
  rect(290, 6, 5, 10);

  fill(37, 244, 255);
  rect(420, 20, -100, -10);
  rect(340, 30, -30, -10);
  rect(330, 40, -20, -10);
  rect(320, 70, -10, -30);

  //White boxes
  fill(255, 255, 255);
  rect(200, 150, 400, 200, 20);
  rect(625, 200, 150, 100, 20);

  //Text
  push();
  fill(255, 123, 177);
  textSize(30);
  text("You Won!", 330, 170, 200, 300);
  pop();

  // Click M to Return to the main meny
  push();
  fill(0, 0, 0);
  textSize(20);
  text("Click M to return to the main meny", 635, 210, 140, 300);
  pop();
}

//losing screen
function lostGame() {
  // Crow Losing
  //Head
  fill(35, 36, 37);
  rect(340, 50, 100, 90);
  rect(350, 40, 80, 10);
  rect(330, 60, 10, 80);
  rect(340, 140, 90, 10);

  //eyes
  fill(0, 0, 0);
  rect(370, 75, 20, 20);
  rect(420, 75, 20, 20);
  fill(295, 255, 255);
  rect(380, 80, 5, 5);
  rect(430, 80, 5, 5);

  //beak
  fill(0, 0, 0);
  rect(395, 100, 60, 10);
  rect(405, 110, 60, 10);
  rect(455, 120, 10, 5);

  //wings
  //left wing
  push();
  fill(35, 36, 37);
  rect(200, 165, -50, 130);
  rect(150, 165, -40, 110);
  rect(110, 165, -30, 90);
  rect(80, 185, -30, 50);
  rect(160, 295, 40, 10);
  rect(120, 275, 30, 10);
  rect(90, 255, 20, 10);
  rect(60, 235, 20, 10);
  rect(50, 195, -10, 30);
  rect(60, 185, 20, -10);

  //right wing
  fill(35, 36, 37);
  rect(600, 165, 50, 130);
  rect(650, 165, 40, 110);
  rect(690, 165, 30, 90);
  rect(720, 185, 30, 50);
  rect(600, 295, 40, 10);
  rect(650, 275, 30, 10);
  rect(690, 255, 20, 10);
  rect(720, 235, 20, 10);
  rect(750, 195, 10, 30);
  rect(720, 185, 20, -10);
  pop();

  push();
  translate(20, 0);

  //tailfeathers
  fill(35, 36, 37);
  rect(360, 350, 50, 80);
  rect(330, 350, 30, 70);
  rect(410, 350, 30, 70);
  rect(300, 350, 30, 50);
  rect(440, 350, 30, 50);
  rect(270, 350, 30, 30);
  rect(470, 350, 30, 30);
  rect(260, 350, 10, 20);
  rect(310, 400, 20, 10);
  rect(370, 430, 30, 10);
  rect(500, 350, 10, 20);
  rect(440, 400, 20, 10);

  //legs
  fill(0, 0, 0);
  rect(430, 360, 10, 90);
  rect(330, 360, 10, 90);

  //casts
  push();
  fill(233, 226, 215);
  rect(310, 380, 50, 80);
  rect(310, 460, -30, -50);
  rect(280, 450, -10, -30);

  fill(212, 204, 192);
  rect(315, 390, 40, -5);
  rect(330, 400, 30, -5);
  rect(310, 410, 40, -5);
  rect(340, 420, 20, -5);
  rect(310, 415, 5, -5);
  rect(315, 420, 5, -5);
  rect(320, 425, 5, -5);
  rect(335, 440, 5, -5);
  rect(300, 410, 5, 30);
  rect(310, 430, 5, 20);
  rect(290, 420, 5, 40);
  rect(275, 420, 5, 20);

  fill(233, 226, 215);
  rect(410, 380, 50, 80);
  rect(490, 460, -30, -50);
  rect(500, 450, -10, -30);

  fill(212, 204, 192);
  rect(415, 390, 40, -5);
  rect(410, 400, 30, -5);
  rect(420, 410, 40, -5);
  rect(410, 420, 20, -5);
  rect(455, 415, 5, -5);
  rect(450, 420, 5, -5);
  rect(445, 425, 5, -5);
  rect(425, 440, 5, -5);
  rect(465, 410, 5, 30);
  rect(455, 430, 5, 20);
  rect(475, 420, 5, 40);
  rect(490, 420, 5, 20);
  pop();

  pop();

  //bandaid
  push();
  fill(249, 208, 141);
  rect(140, 165, 30, 50);
  rect(130, 165, 50, 40);
  fill(253, 236, 208);
  rect(130, 165, 50, 10);
  pop();

  //tear
  push();
  fill(93, 207, 235);
  rect(370, 90, 20, 5);
  rect(420, 90, 20, 5);
  pop();

  //party hat

  fill(223, 36, 255);
  rect(330, 80, -10, -40);
  rect(340, 60, -10, -30);
  rect(350, 50, -10, -30);
  rect(430, 40, -80, -20);
  rect(430, 30, 10, 20);
  rect(300, 0, 20, 20);
  rect(320, 5, 5, 5);
  rect(305, 20, 5, 5);
  rect(295, 20, 5, 5);
  rect(295, 0, 5, 10);
  rect(290, 6, 5, 10);

  fill(37, 244, 255);
  rect(420, 20, -100, -10);
  rect(340, 30, -30, -10);
  rect(330, 40, -20, -10);
  rect(320, 70, -10, -30);

  //White boxes
  fill(255, 255, 255);
  rect(200, 150, 400, 200, 20);
  rect(625, 200, 150, 100, 20);

  //Text
  push();
  fill(255, 123, 177);
  textSize(30);
  text("You Lost!", 330, 170, 200, 300);
  pop();

  // Click M to Return to the main meny
  push();
  fill(0, 0, 0);
  textSize(20);
  text("Click M to return to the main meny", 635, 210, 140, 300);
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
    gameIsRunning = "false";
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
        gameBackground();
        wonGame();
        results =
          "Thanks for flying to safety! You definitely deserve some cake :)";
        gameIsRunning = false;
        gameMode = "endscreen";
        console.log("Won!");
      }

      //losing the game
      if (crowThings.y > landingY && crowThings.velocity > 2) {
        gameBackground();
        lostGame();
        results = "Awww schucks... broken legs = no invite... try again ;(";
        gameIsRunning = false;
        gameMode = "endscreen";
        console.log("Gameover");
      }
    }
  }
  if (gameMode === "endscreen") {
    noStroke();
    push();
    fill(0, 0, 255);
    textSize(20);
    text(results, 225, 220, 360);
    pop();
    if (gameMode === "endscreen" && keyIsPressed === true && keyCode === 77) {
      gameMode = "startscreen";
      //Restarting the crow so it doesn't count as gameover
      crowThings.x = 400;
      crowThings.y = 10;
      crowThings.velocity = 0.5;
      crowThings.acceleration = 0.1;
    }
  }
}
