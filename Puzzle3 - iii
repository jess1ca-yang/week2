function repeat(direction, n) {
  var count = 0
  while (count < n) {
  direction();
  count = count + 1
  }
}

function draw(direction, n) {
  var count = 0
	while (count < n) {
  setColor("blue");
  right();
  count = count + 1
	}
}

function rect(x, y, width, height) {
  var count = 0
  repeat(right, x);
  repeat(down, y);
  while (count < width){
  setColor("blue");
  right();
  count = count + 1
}
  while (count < height){
  setColor("blue");
  down();
	count = count + 1
  }
  count = 0
  while (count < width){
  setColor("blue");
  left();
	count = count + 1
  }
  count = 2
  while (count < height){
  setColor("blue");
  up();
	count = count + 1
  }
}


rect(2, 3, 2, 5);
