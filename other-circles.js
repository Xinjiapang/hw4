function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    fill(x,200,100);
    beginShape();
    vertex(x[i], y[i]);
    vertex(x[i]+(x.length-i), y[i]);
    vertex(x[i]+(x.length-i), y[i]+(x.length-i));
    vertex(x[i]+(x.length-i)*2, y[i]+(x.length-i));
    vertex(x[i]+(x.length-i)*2, y[i]+(x.length-i)*2);
    vertex(x[i], y[i]+(x.length-i)*2);
    endShape(CLOSE);
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
