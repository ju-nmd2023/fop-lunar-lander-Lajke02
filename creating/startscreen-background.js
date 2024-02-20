//Just creating some of the graphics before putting it into the game.

function setup() {
  createCanvas(800, 500);
}
function generalBackground() {
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

function startMeny() {
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
  text("Use the space key to fly higher and the arrow keys to steer. Land gently on the ground or on the food in the tree.", 635, 210, 140, 300);
  text("The crow is having his birthday party but first he needs to get down safely. Help the crow get down without hurting him to invited to his party too. Extra points if you help bring him food :)", 35, 160, 140, 300);
  pop();

}

function draw() {
  setup();
  generalBackground();
  startMeny();
}
