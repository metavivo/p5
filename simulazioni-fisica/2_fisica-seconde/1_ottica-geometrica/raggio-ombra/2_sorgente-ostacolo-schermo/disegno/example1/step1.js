function setup() {
  createCanvas(600, 400);
  background(240);
  
  // sorgente
  strokeWeight(8)
  point(150,height/2)
  strokeWeight(1)
  
  // schermo
  strokeWeight(3)
  line(width - 50, 20, width - 50, height - 20)
  
  // ostacolo
  line(width/2, 150, width/2, height - 150)
  
}
