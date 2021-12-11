let xoff = 0;
let yoff = 0;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  // noLoop();
}

function draw() {
  // Optional
  // noiseDetail();

  for (let x = 0; x < windowWidth; x++) {
    // For every xoff, start yoff at 0
    yoff = 0;

    // var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
    for (let y = 0; y < windowHeight; y++) {
      // let bright = int(random(0, 255));
      // Use xoff and yoff for noise
      var bright = map(noise(xoff, yoff, zoff), 0, 1, 0, 255);
      //println("pixel: ", x+(y*width));
      // Use x and y for pixel location
      stroke(bright);
      point(x, y);
      yoff += 0.01;
      // console.log(x, y, bright);
    }

    xoff += 0.01;
  }
  zoff += 0.01;

  frameRate(1);
  console.log(xoff, yoff, zoff);
}
