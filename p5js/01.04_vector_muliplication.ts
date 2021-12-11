function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(windowWidth / 2, windowHeight / 2);
  mouse.sub(center);

  mouse.mult(0.5);

  translate(windowWidth / 2, windowHeight / 2);
  strokeWeight(4);
  line(0, 0, mouse.x, mouse.y);
}
