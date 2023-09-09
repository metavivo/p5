let img
let shape 

let x = 0;

function preload(){
 img = loadImage('https://picsum.photos/100/150')
}

function setup() {
  createCanvas(600, 400);

  img.resize(200,200);
  let mask1 = createGraphics(200, 200);
  ctx = mask1.canvas.getContext("2d");
  mask1.circle(100,100,150);
  ctx.clip();
  mask1.image(img,0,0);
  image(mask1,x,100);
  
    
}

function draw(){
  background(220);
  
  x = x + 1;

  img.resize(200,200);
  let mask1 = createGraphics(200, 200);
  ctx = mask1.canvas.getContext("2d");
  mask1.circle(100,100,150);
  ctx.clip();
  mask1.image(img,0,0);
  image(mask1, x, 100)
}
