function setup() {
  createCanvas(750, 500);
  background(220)
  
  strokeWeight(3)

  line(20, height - 30, width - 20, height - 30)
  line(30, 10, 30, height - 20)
  
  line(width - 30, height - 35, width - 20, height - 30)
  line(width - 30, height - 25, width - 20, height - 30)

  line(30, 10, 25, 20)
  line(30, 10, 35, 20)
  
  textSize(18)
  text("O", 10, height - 10)
  text("X", width - 15, height - 10)
  text("Y", 10, 20)
  
}
