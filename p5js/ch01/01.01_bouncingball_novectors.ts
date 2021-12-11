let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);

  x += xspeed;
  y += yspeed;
  if ((x > windowWidth) || (x < 0)) {
    xspeed *= -1;
  }
  if ((y > windowHeight) || (y < 0)) {
    yspeed *= -1;
  }

  stroke(0);
  fill(175);
  var size = min(windowWidth, windowHeight) / 50;
  ellipse(x, y, size, size);
}
