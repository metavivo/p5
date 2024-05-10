let ts = 40
let fr = 60
let fc
let t

let k = 50
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
  
  // TEMPO
  t = fc/fr
  
  // FUNZIONE
  x = k * t
  
  rect(x,100,100,100)
  
}
