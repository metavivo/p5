let x = 100
let y = 100

function setup() {
  createCanvas(600, 400)
  background(220)

}

function draw() {

  x = x + 1
  y = y + 1
  
  fill(0)
  circle(x, y, 10)

}
