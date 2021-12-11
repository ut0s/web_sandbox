let c = 0;
let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);
  let index = int(random(total));
  randomCounts[index]++;
  stroke(0);
  strokeWeight(2);
  fill(177);

  let w = windowWidth / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }

  // c++;
  // console.log(c);
}
