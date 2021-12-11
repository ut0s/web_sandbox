let c = 0;
let prob = [];

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
    for (let i = 0; i < prob.length; i++) {
      prob[i] = random(1);
    }
    prob.sort();

    var choice = random(1);
    if (choice < prob[0]) {
      this.x++;
    } else if (choice < prob[1]) {
      this.x--;
    } else if (choice < prob[2]) {
      this.y++;
    } else {
      this.y--;
    }
    // this.stepx = random(-1, 1);
    // this.stepy = random(-1, 1);
    // this.x += this.stepx;
    // this.y += this.stepy;

    this.x = constrain(this.x, 0, windowWidth - 1);
    this.y = constrain(this.y, 0, windowHeight - 1);

    console.log(prob);
    // console.log(c);
    // c++;
  }
}

function setup() {
  // createCanvas(width, height);
  createCanvas(windowWidth, windowHeight);
  background(255);
  w = new Walker();

  prob = [0, 0, 0];
}

function draw() {
  w.step();
  w.display();
}
