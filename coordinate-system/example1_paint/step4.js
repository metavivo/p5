function setup() {
  createCanvas(750, 500);
  background(220)
  
  Ox = 30
  Oy = 30
  
  createAxes(Ox, Oy)

  d = 40
  createUnit(Ox, Oy, d)
    
}


function createAxes(Ox, Oy) {
  
  strokeWeight(3)
  
  // x axis
  line(Ox - 20, height - Oy, width - 20, height - Oy)

  // y axis
  line(Ox, 10, Ox, height - Oy + 10)
  
  // x arrow
  line(width - 30, height - Oy - 5, width - 20, height - Oy)
  line(width - 30, height - Oy + 5, width - 20, height - Oy)

  line(Ox, 10, Ox - 5, 20)
  line(Ox, 10, Ox + 5, 20)
  
  strokeWeight(1)

  textSize(18)
  text("O", Ox - 20, height - Oy + 20)
  text("X", width - 15, height - Oy + 20)
  text("Y", Ox - 20, 20)

}


function createUnit(Ox, Oy, d) {
  
  x = Ox
  while (x < width - 20) {
    x = x + d
    line(x, height - Oy - 5, x, height - Oy + 5)
  }

  y = height - Oy
  while (y > 10) {
    y = y - d
    line(Ox - 5, y, Ox + 5, y)
  }
  
}
