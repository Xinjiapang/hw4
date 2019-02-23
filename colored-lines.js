function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 50; x < width-50; x = x + 30) {
    stroke(x,x,100);
    line(x, height/2, mouseX, mouseY);
  }
}
