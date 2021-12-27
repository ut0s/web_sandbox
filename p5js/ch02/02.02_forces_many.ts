class Mover {
  position;
  velocity;
  acceleration;
  topspeed;
  mass;
  color;

  wind;
  gravity;

  constructor() {
    this.position = createVector(random(windowWidth), random(windowHeight));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.topspeed = random(1, 5);
    this.mass = 1;
    this.color = random(1, 255);
    this.wind = createVector(random(0, 5), 0);
    this.gravity = createVector(0, random(0, 0.5));
  }

  apply_force(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    // this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  checkEdges() {
    if (this.position.x > windowWidth) {
      this.position.x = windowWidth;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > windowHeight) {
      this.velocity.y *= -1;
      this.position.y = windowHeight;
    } else if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
    }
  }

}


let mover = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  for (var i = 0; i < 20; i++) {
    mover[i] = new Mover();
  }
}

function draw() {
  background(255);

  for (var i = 0; i < 20; i++) {
    mover[i].apply_force(mover[i].gravity);
    mover[i].apply_force(mover[i].wind);

    mover[i].update();
    mover[i].checkEdges();
    mover[i].display();
  }
}
