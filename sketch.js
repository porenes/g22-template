let s;

function setup() {
  s = p5.min(p5.windowWidth, p5.windowHeight);
  createCanvas(s, s);
}

function draw() {
  background(220);
}

windowResized = function () {
  s = min(windowWidth, windowHeight);
  p5.resizeCanvas(s, s);
};
