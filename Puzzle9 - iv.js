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
  while (height > 1) {
  down();
  draw(right, width);
  height = height - 1
  down();
  draw(left, width);
  height = height - 1
}
}



rect(2, 3, 6, 11);
