let img
let shape 

function preload(){
 img = loadImage('https://picsum.photos/100/150')
}

function setup() {
  createCanvas(600, 500);

  img.resize(200,200);
  let mask1 = createGraphics(200, 200);
  ctx = mask1.canvas.getContext("2d");
  mask1.rect(0,0,100, 150);
  ctx.clip();
  mask1.image(img,0,0);

  shearX(PI / 8);
  image(mask1,0,100);

  shearX(- PI / 8);
  image(mask1,0,300);
  
  shearX(PI / 8);
  textSize(32);
  text('word', 10, 500);

  
  
}

function draw(){
//  background(220);
  
}
