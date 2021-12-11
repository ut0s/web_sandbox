let position;
let velocity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function draw() {
  background(255);

  position.add(velocity);
  if ((position.x > windowWidth) || (position.x < 0)) {
    velocity.x *= -1;
  }
  if ((position.y > windowHeight) || (position.y < 0)) {
    velocity.y *= -1;
  }

  stroke(0);
  fill(175);
  var size = min(windowWidth, windowHeight) / 50;
  ellipse(position.x, position.y, size, size);
}
