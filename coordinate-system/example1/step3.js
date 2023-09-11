function setup() {
  createCanvas(750, 500);
  background(220)
  
//  createAxes(30, 30)
  createAxes(100, 100)
  
    
}


function createAxes(Ox, Oy) {
  
  strokeWeight(3)
  
  // x axis
  
  // red origin
  strokeWeight(10)
  stroke(255, 0, 0)
  point(Ox, height - Oy)
  stroke(0)
  strokeWeight(3)

  // x axis
  line(Ox - 20, height - Oy, width - 20, height - Oy)

  // y axis
  line(Ox, 10, Ox, height - Oy + 10)
  
  // x arrow
  line(width - 30, height - Oy - 5, width - 20, height - Oy)
  line(width - 30, height - Oy + 5, width - 20, height - Oy)

  // y arrow

  strokeWeight(7)
//  point(width - 30, height - Oy + 5)
//  point(width - 20, height - Oy)  
  strokeWeight(3)
  
  
  
  line(30, 10, 25, 20)
  line(30, 10, 35, 20)
  
  strokeWeight(1)

  textSize(18)
  text("O", 10, height - 10)
  text("X", width - 15, height - 10)
  text("Y", 10, 20)

}
