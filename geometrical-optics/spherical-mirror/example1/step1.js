function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(220);
  arc(width/2, height/2, 200, 200, - PI/4, PI/4);
  line(0, height/2, width, height/2)
  
  strokeWeight(4)
  
  push()
  
  translate(width/2, height/2)
//  line(width/2, height/2, width/2 + 100, height/2)
  angleMode(DEGREES)
  
  rotate(-30)
  line(0, 0, 0 + 100, 0)
  
  pop()
  strokeWeight(1)
  angleMode(RADIANS)
  
}
