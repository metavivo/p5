let x = 0
let v = 1.2

function setup() {
  createCanvas(600, 400)
  
  rect(x,100,100,100)
  
  
}

function draw() {
  background(220)

  x = x + v
  
  rect(x,100,100,100)

}
