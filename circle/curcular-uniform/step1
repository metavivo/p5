



function setup() {
  createCanvas(600, 400);
  
  r = 100;
  Xc = width/2;
  Yc = height/2;
  d = 200;
  alpha = 45;
  
}

function draw() {
  background(220);
  strokeWeight(2);
  

  
  circle(Xc, Yc, 2*r);
  
  strokeWeight(10);
  point(Xc,Yc);
  
  strokeWeight(3);

  line(Xc - d, Yc, Xc + d, Yc);
  
  line(Xc, Yc - d, Xc, Yc + d);
  
  stroke(255, 0, 0);
  strokeWeight(20);
  
  X = r * cos(radians(alpha));
  
  Y = r * sin(radians(alpha));
  
  point(Xc + X, Yc - Y);
  stroke(0);



}
