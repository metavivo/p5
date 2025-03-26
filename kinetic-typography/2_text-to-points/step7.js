let font;  // opentype.js font object
let path;  // percorso del testo

let fSize = 60;
let sw = 2;
let msg = 'Ciaooo!';

function setup() {
    createCanvas(800, 500);
    opentype.load('Roboto-Italic.ttf', function (err, f) {
        if (err) {
            alert('Font could not be loaded: ' + err);
        } else {
            font = f;
            console.log('Font caricato correttamente');

            // Crea il percorso del testo
            let x = 60;
            let y = 300;
            path = font.getPath(msg, x, y, fSize);
            console.log(path.commands);
        }
    });
}

function draw() {
    background(255);

    if (!path) return; // Aspetta che il path sia pronto

    noFill();
    stroke(0);
    strokeWeight(sw);

    beginShape();

    for (let cmd of path.commands) {
        if (cmd.type === 'M') {
            vertex(cmd.x, cmd.y);
        } else if (cmd.type === 'L') {
            vertex(cmd.x, cmd.y);
        } else if (cmd.type === 'C') {
            bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        } else if (cmd.type === 'Q') {
            quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y);
        } else if (cmd.type === 'Z') {
            endShape(CLOSE);
            beginShape(); // Per una nuova lettera
        }
    }

    endShape();
}
