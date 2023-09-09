let img
let shape 

let x = 0;

function preload(){
 img = loadImage('https://picsum.photos/100/150')
}

function setup() {
 createCanvas(600, 400);
 
 image(img, x, 0)
}

function draw(){
   background(220);
    x = x + 1;
   image(img, x, 0)
}
