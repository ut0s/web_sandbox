class Mover {
  constructor(m) {
    this.position = createVector(random(windowWidth), random(windowHeight));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mu = 0.01;
    this.normal = 1;
    this.topspeed = random(1, 5);
    this.mass = m;
    this.radius = m * 8;
    this.color = random(1, 255);
    this.wind = createVector(random(-1, 1), 0);
    this.gravity = createVector(0, 1 * m);
    this.G = 10;
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
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
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

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }


}

let mover = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);


  for (var i = 0; i < 20; i++) {
    mover[i] = new Mover(random(1, 10));
  }
}

function draw() {
  background(255);

  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      if (i != j) {
        let force = mover[j].attract(mover[i]);
        mover[i].apply_force(force);
      }
    }
    mover[i].update();

    mover[i].checkEdges();
    mover[i].display();
  }
}
