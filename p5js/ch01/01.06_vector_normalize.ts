function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(windowWidth / 2, windowHeight / 2);
  mouse.sub(center);

  mouse.normalize();
  mouse.mult(50);

  let m = mouse.mag();
  fill(0);
  rect(0, 0, m, 10);

  translate(windowWidth / 2, windowHeight / 2);
  strokeWeight(4);
  line(0, 0, mouse.x, mouse.y);
}
