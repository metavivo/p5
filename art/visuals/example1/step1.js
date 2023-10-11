let shapes = [];
let currentShape = [];
let backgroundColor;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(220);
  background(backgroundColor);
  noFill();
  stroke(0);
  strokeWeight(2);
}

function draw() {
  // Disegna tutte le forme
  for (let shape of shapes) {
    beginShape();
    for (let point of shape) {
      vertex(point.x, point.y);
    }
    endShape(CLOSE);
  }

  // Disegna la forma corrente (quella che l'utente sta disegnando)
  beginShape();
  for (let point of currentShape) {
    vertex(point.x, point.y);
  }
  endShape();
}

function mousePressed() {
  currentShape = [];
  shapes.push(currentShape);
}

function mouseDragged() {
  let point = createVector(mouseX, mouseY);
  currentShape.push(point);
}

function keyTyped() {
  if (key === 'c' || key === 'C') {
    // Cancella tutto il canvas
    background(backgroundColor);
    shapes = [];
  } else if (key === 's' || key === 'S') {
    // Salva un'immagine del quadro astratto
    saveCanvas('quadro_astratto', 'png');
  }
}
