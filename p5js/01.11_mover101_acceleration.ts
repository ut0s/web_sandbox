class Mover {
  position;
  velocity;
  acceleration;
  topspeed;
  color;

  constructor() {
    this.position = createVector(random(windowWidth), random(windowHeight));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.topspeed = random(1, 5);
    this.color = random(1, 255);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = mouse.sub(this.position);
    dir.normalize();
    this.acceleration = dir;
    this.acceleration.mult(random(0, 1));

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}


let mover = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  for (let i = 0; i < 20; i++) {
    mover[i] = new Mover();
  }
}

function draw() {
  background(255);

  for (var i = 0; i < mover.length; i++) {
    mover[i].update();
    mover[i].checkEdges();
    mover[i].display();
  }

}
