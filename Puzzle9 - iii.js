
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
  direction();
  count = count + 1
	}
}

function rect(x, y, width, height) {
  var count = 0
  repeat(right, x);
  repeat(down, y);
  draw(right, width);
  draw(down, height);
  draw(left, width);
  draw(up, height);
}


rect(2, 3, 6, 7);
