function setup() {
  createCanvas(600, 400);
  background(240);
  
  // sorgente
  strokeWeight(12)
  point(150,height/2)
  strokeWeight(1)
  
  // schermo
  strokeWeight(3)
  line(width - 50, 30, width - 50, height - 30)
  
  // ostacolo
  line(width/2, 150, width/2, height - 150)
  
  // raggio 1
  strokeWeight(2)
  stroke(255,150,0)
  textSize(25)
  line(150,height/2, width/2, 150)
  
  stroke(0)
  strokeWeight(1)
  text("sorgente", 20, height/2 + 10)

  text("schermo", width - 100, 25)

  text("ostacolo", width/2 + 20, height/2)
  
  // Problema: come allungare il raggio in modo da intercettare lo schermo?
  
push()
translate(150,height/2)
angleMode(DEGREES)
rotate(-30)
line(0,0,200,0)
pop()
  
  
}
