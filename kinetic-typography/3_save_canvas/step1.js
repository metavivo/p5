// https://p5js.org/reference/#/p5/saveCanvas


// note that this example has the same result as above
// if no canvas is specified, defaults to main canvas
function setup() {
let c = createCanvas(100, 100);
background(255, 0, 0);
saveCanvas('myCanvas', 'jpg');

// all of the following are valid
saveCanvas(c, 'myCanvas', 'jpg');
saveCanvas(c, 'myCanvas.jpg');
saveCanvas(c, 'myCanvas');
saveCanvas(c);
saveCanvas('myCanvas', 'png');
saveCanvas('myCanvas');
saveCanvas();
}
