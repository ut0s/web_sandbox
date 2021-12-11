function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  background(0);

  // generate random landscape
  for (let x = 0; x < windowWidth; x += 20) {
    for (let y = 0; y < windowHeight; y += 20) {
      push();
      let z = random(0, 50);
      translate(-windowWidth / 2 + x, -windowHeight / 2 + y, z);
      plane(19);
      pop();
    }
  }

}

function draw() {

  // support mouse drag
  orbitControl();


}
