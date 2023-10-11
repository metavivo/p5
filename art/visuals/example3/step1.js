/*
ChatGPT

Ecco un esempio di un quadro astratto con "pennellate" classiche in p5.js. In questo caso, useremo forme casuali e colori per creare un'immagine astratta
In questo esempio, vengono disegnate forme casuali (cerchi o rettangoli) con colori casuali. L'animazione continua a generare nuove forme ad ogni frame, 
creando un quadro astratto con pennellate classiche. Puoi regolare i parametri come dimensioni, colori e forme per ottenere l'aspetto desiderato.

*/

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  frameRate(10);
}

function draw() {
  // Scegli un colore casuale
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);

  // Scegli una forma casuale (cerchio o rettangolo)
  let shape = random(1);

  if (shape < 0.5) {
    // Disegna un cerchio casuale
    let x = random(width);
    let y = random(height);
    let diameter = random(20, 100);
    ellipse(x, y, diameter, diameter);
  } else {
    // Disegna un rettangolo casuale
    let x = random(width);
    let y = random(height);
    let w = random(20, 100);
    let h = random(20, 100);
    rect(x, y, w, h);
  }
}
