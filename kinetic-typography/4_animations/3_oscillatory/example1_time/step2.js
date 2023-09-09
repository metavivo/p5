let ts = 40
let fr = 60
let fc
let t

let l = 100

let x0
let xFin

let n = 0

let p = 1
let omega
let phi = 0
let A = 200

let y0

function setup() {
  createCanvas(600, 400)

  omega = 2 * PI / p

  x0 = width/2 - l/2
  y0 = 100
  
  frameRate(fr)
  textSize(ts)
  
  rect(x0, y0, l, l)

}

function draw() {
  background(220)
  
  fc = frameCount
  t = fc/fr
  dy = textAscent()
//  text('t = ' + round(t, 1), 10, dy)
  
  dx = round(A * sin(omega * t + phi))
  x = x0 + A * sin(omega * t + phi)
//  text('dx = ' + dx, 10, 300)


  if (dx == 200 && n == 0) {
    n = 1
  }
  if (dx == -200 && n == 1) {
    n = 2
  }
  if (dx == 0 && n == 2) {
    n = 3
    measuredPeriod = t
  }
  if (n == 3) {
    text('Measured Period = ' + round(measuredPeriod, 1) + 's', 10, 350)
  }  
  
  console.log(n)
  
  if (t <= p) {
    rect(x, y0, 100, 100)  
    xFin = x
  } else {
    rect(xFin, y0, 100, 100)  
  }
  
  line(width/2, 0, width/2, height)
  
}
