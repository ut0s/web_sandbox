let pos;
let vel;
let box_size;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
  pos = createVector(random(100), random(100), random(100));
  vel = createVector(random(10), random(10), random(10));
  box_size = min(windowWidth, windowHeight) / 3;
  console.log(box_size);
}

function draw() {
  background(255);

  pos.add(vel);
  if (abs(pos.x) > box_size / 2) {
    vel.x *= -1;
  }
  if (abs(pos.y) > box_size / 2) {
    vel.y *= -1;
  }
  if (abs(pos.z) > box_size / 2) {
    vel.z *= -1;
  }

  rotateX(millis() / 5000);
  rotateY(millis() / 5000);

  noFill();
  stroke(100, 100, 240);
  box(box_size);
  var size = min(windowWidth, windowHeight) / 50;
  translate(pos);

  fill(175);
  stroke(0);
  sphere(size);
}
