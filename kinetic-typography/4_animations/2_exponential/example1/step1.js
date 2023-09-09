let x = 0
let v = -0.1
let a = 0.3

function setup() {
  createCanvas(600, 400)
  
  rect(x,100,100,100)

}

function draw() {
  background(220)

  v = v + a
  x = x + v
  
  rect(x,100,100,100)

}
