
function repeat(direction, n) {
  var count = 0
  while (count < n) {
  direction();
  count = count + 1
  }
}


function upDown() {
  var count = 0
  while (count < 20) {
	setColor("blue");
  down();
  count = count + 1
  }
  repeat(right, 3)
  count = 0
  while (count < 20) {
	setColor("blue");
  up();
  count = count + 1
  }
  repeat(right, 3)
  count = 0
}

function drawLine() {
 	count = 0
 	while (count < 5) {
  upDown();
  count = count + 1
}
}

drawLine();
