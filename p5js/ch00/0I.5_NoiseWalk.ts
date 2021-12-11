let w;

class Walker {
  constructor() {
    this.pos = createVector(windowWidth / 2, windowHeight / 2);
    this.noff = createVector(random(1000), random(1000));
  }

  display() {
    strokeWeight(2);
    fill(51);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, 48, 48);

  }

  walk() {
    this.pos.x = map(noise(this.noff.x), 0, 1, 0, windowWidth / 2);
    this.pos.y = map(noise(this.noff.y), 0, 1, 0, windowHeight / 2);
    this.noff.add(0.01, 0.05, 0);
  }
}

function setup() {
  // createCanvas(width, height);
  createCanvas(windowWidth, windowHeight);
  background(255);
  w = new Walker();
}

function draw() {
  w.walk();
  w.display();
}
