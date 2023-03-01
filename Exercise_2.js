// Variables
let x; 
let speedX;
let y;
let speedY;

// Functions
function setup() {
  createCanvas(400, 400);
  x = 50; // 
  speedX = 5;
  y = 10;
  speedY = 5;
}

function draw() {
  background(220);
  noStroke();

  fill("Blue");
  sprite(x, y);
 
  x = x + speedX;
  y = y + speedY;
    if(x >= width || x <= 0) {
    speedX = speedX * -1;
    if(y >= height || y <= 0) {
    speedY = speedY * -1;
  }
}
  console.log("The value of x is" + x);
  console.log("The value of speedX is" + speedX);
  console.log("The value of y is" + y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    speedX = speedX * 1;
  } else if (keyCode === RIGHT_ARROW) {
    speedX = speedX * -1;
  } else if (keyCode === UP_ARROW) {
    speedY = speedY * 1;
  } else if (keyCode === DOWN_ARROW) {
    speedY = speedY * -1;
  }
}

function sprite(x, y) {
  push();
  translate(x, y);
  scale(0.4);
  fill("#593123");
  ellipse(100, 100, 160, 160);
  fill("#795548");
  ellipse(100, 135, 85, 85);
  fill("#000000");
  ellipse(100, 100, 40, 20);
  ellipse(55, 95, 30, 30);
  ellipse(145, 95, 30, 30);
  angleMode(DEGREES);
  arc(100, 130, 50, 50, 30, 150);
  fill("#795548");
  arc(80, 80, 140, 140, 190, 250);
  arc(120, 80, 140, 140, 285, 350);
  pop();
}
