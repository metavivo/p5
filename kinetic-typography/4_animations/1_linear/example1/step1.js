let x = 0

function setup() {
  createCanvas(600, 400)
  
  rect(x,100,100,100)
  
  
}

function draw() {
  background(220)

  x = x + 1
  
  rect(x,100,100,100)

}
