let fr = 60
let fc
let t

function setup() {
  createCanvas(600, 400)
  frameRate(fr)
  textSize(30)
}

function draw() {
  background(220)
  
  fc = frameCount
  text(fc, 100, 100)
  
  t = round(fc/fr, 1)
  console.log(t)
  text(t, 100, 200)
  
}
