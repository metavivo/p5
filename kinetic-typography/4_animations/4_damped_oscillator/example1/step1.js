let ts = 40
let fr = 60
let fc
let t

let l = 100
let x0, y0

let p = 0.2
let omega
let phi = 0
let A = 200

let k = 0.7

function setup() {
  createCanvas(600, 400)

  frameRate(fr)
  textSize(ts)
  
  omega = 2 * PI / p

  x0 = width/2 - l/2
  y0 = 100

  rect(x0, y0, l, l)

}

function draw() {
  background(220)
  
  fc = frameCount
  t = fc/fr
  dy = textAscent()
  text('t = ' + round(t, 1), 10, dy)

//  x = x0
  x = x0 + A * exp(-k * t) * sin(omega * t + phi)
  
  rect(x, y0, 100, 100)
  
  line(width/2, 0, width/2, height)

}
