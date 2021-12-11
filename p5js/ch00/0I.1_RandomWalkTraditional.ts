let w;

class Walker {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
  }

  display() {
    stroke(1);
    point(this.x, this.y);
  }

  step() {
    // var choice = int(random(4));
    // if (choice == 0) {
    //   this.x++;
    // } else if (choice == 1) {
    //   this.x--;
    // } else if (choice == 2) {
    //   this.y++;
    // } else {
    //   this.y--;
    // }
    this.stepx = random(-1, 1);
    this.stepy = random(-1, 1);

    this.x += this.stepx;
    this.y += this.stepy;

    this.x = constrain(this.x, 0, windowWidth - 1);
    this.y = constrain(this.y, 0, windowHeight - 1);
  }
}

function setup() {
  // createCanvas(width, height);
  createCanvas(windowWidth, windowHeight);
  background(255);
  w = new Walker();
}

function draw() {
  w.step();
  w.display();
}
