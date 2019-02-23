function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var dots = [];
  for (i = 0; i < 100; i++) {
    var dot = {
      x: random(width),
      y: random(height),
    };
    dots.push(dot);
  }
for (var i = 0; i < dots.length; i++) {
    stroke(dots[i].x, dots[i].y, 100);
    point(dots[i].x, dots[i].y);
  }
}
