var speed = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 10; x < width - 10; x = x + 10) {
    line(x + speed, height / 2, x + speed + 100, height / 2 - 75);
    speed = speed + 1 / 9;
    if (x >= width) {
      speed -= 1/9;
    }
  }
}
