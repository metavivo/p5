let ts = 40
let fr = 60
let fc
let t, tFin

let l = 100
let x0, y0, xNew, xMax

let p = 1
let omega
let phi
let A = 1000

let k = 0.4


function setup() {
  createCanvas(600, 400)

  frameRate(fr)
  textSize(ts)
  
  omega = 2 * PI / p
  phi = PI
  
  tFin = p * 0.8

  x0 = width/2 - l/2
  y0 = 100

  rect(x0, y0, l, l)

}

function draw() {
  background(220)
  
  fc = frameCount
  t = fc/fr
  dy = textAscent()
//  x = x0
  x = x0 + A * k * pow(t, 3) * sin(omega * t + phi)
  
  
  if (t < tFin) {
    text('t = ' + round(t, 1), 10, dy)
    rect(x, y0, 100, 100)
    xFin = x  
  } else {
    text('t = ' + round(tFin, 1), 10, dy)
    rect(xFin, y0, 100, 100)    
  }
  
  line(width/2, 0, width/2, height)

}
