let ts = 40
let fr = 60
let fc
let t

let x0 = 0
let v0 = 20
let a = 800

function setup() {
  createCanvas(600, 400)
  
  frameRate(fr)
  textSize(ts)
  
  rect(x0,100,100,100)

}

function draw() {
  background(220)
  
  fc = frameCount
  t = fc/fr
  dy = textAscent()
  text(round(t, 1), 10, dy)
  
  v = v0 + a * t
  x = x0 + v0 * t + (1/2) * a * pow(t, 2)
  
  rect(x,100,100,100)
  
}
