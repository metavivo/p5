function setup() {
  createCanvas(600, 400);

  shearX(PI / 8);
  textSize(32);
  text('word', 10, 100);

  shearX(- PI / 8);
  shearY(PI / 8);
  textSize(32);
  text('word', 10, 200);

  
}

function draw(){
//  background(220);
  
}
