let x, y, r

function setup() {
  createCanvas(600, 400);
  
  x = 50
  y = height/2
  r = 50
  
}


function draw() {
  background(240);
  
  x++

  circle(x,y,r)
  
}
