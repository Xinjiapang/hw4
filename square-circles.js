function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  //   var length= 1 + (x.length - i)
  for (var i = 0; i < x.length; i = i + 5) {
    var length = 1 + (x.length - i) // create a variable for the length of the square.
    rectMode(CENTER); // set the square at the center.
    rect(x[i], y[i], length, length); // create squares
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
