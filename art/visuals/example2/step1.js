/*
ChatGPT

Ecco un esempio di un quadro astratto animato con colori sfumati e in continuo cambiamento in p5.js:
In questo esempio, vengono generati una serie di colori sfumati che cambiano gradualmente nel tempo. 
Le forme astratte vengono quindi disegnate utilizzando questi colori in base al tempo, creando un'animazione continua e cangiante. 
Puoi personalizzare il numero di colori, le forme e il ritmo dell'animazione in base alle tue preferenze.


*/




let colors = [];
let numColors = 5;
let t = 0;

function setup() {
  createCanvas(400, 400);
  noFill();
  frameRate(30);

  // Genera una serie di colori sfumati
  for (let i = 0; i < numColors; i++) {
    let interColor = lerpColor(color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), 0.5);
    colors.push(interColor);
  }
}

function draw() {
  background(220);

  // Calcola il tempo per l'animazione
  t += 0.02;

  // Disegna le forme astratte con colori sfumati e in cambiamento
  for (let i = 0; i < numColors; i++) {
    stroke(colors[i]);
    beginShape();
    for (let j = 0; j < TWO_PI; j += PI / 30) {
      let radius = 100 + 50 * sin(t + i * PI / 5);
      let x = width / 2 + radius * cos(j);
      let y = height / 2 + radius * sin(j);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
