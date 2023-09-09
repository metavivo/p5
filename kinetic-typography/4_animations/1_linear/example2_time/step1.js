let ts = 40
let fr = 60
let fc
let t

let v = 50
let x = 0

function setup() {
  createCanvas(600, 400)
  
  frameRate(fr)
  textSize(ts)
  
  rect(x,100,100,100)

}

function draw() {
  background(220)
  
  fc = frameCount
  t = fc/fr
//  console.log(t)
  dy = textAscent()
  text(round(t, 1), 10, dy)
  
  x = v * t
  // console.log(x)
  
  rect(x,100,100,100)
  
}
