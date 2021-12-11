let c = 0;

function setup() {
  // createCanvas(width, height);
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let mean = windowWidth / 2;
  let sd = 60;
  let num = randomGaussian(mean, sd);

  noStroke();
  fill(255, 10);
  ellipse(num, windowHeight / 2, 16, 16);

  console.log("num:" + num);
  // console.log(c);
  // c++;

}
