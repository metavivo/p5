       /*
            3. use opentype.js for more control
            reference: https://github.com/opentypejs/opentype.js
        */

        let font // opentype.js font object
        let fSize // font size
        let msg // text to write
        let pts = [] // store path data
        let path
        
        let d = 10

        function setup() {
            createCanvas(800, 500)

            opentype.load('Inconsolata.otf', function (err, f) {
                if (err) {
                    alert('Font could not be loaded: ' + err);
                } else {
                    font = f
                    console.log('font ready')

                    fSize = 40
                    msg = 'Ciaooo!'

                    let x = 60;
                    let y = 300;
                    path = font.getPath(msg, x, y, fSize);
                    console.log(path.commands)
                }
            })
        }

        function draw() {
          
          
          
          
            if (!font) return

//            background(0)
            background(255)
            noFill()
//            stroke(255)
            stroke(0)
          strokeWeight(4)
//            fill(0)  
          
            for (let cmd of path.commands) {

                cmd.x = cmd.x + d;
                cmd.x1 = cmd.x1 + d;
                cmd.x2 = cmd.x2 + d;

              if (cmd.type === 'M') {
                    beginShape()
                    vertex(cmd.x, cmd.y)
                } else if (cmd.type === 'L') {
                    vertex(cmd.x, cmd.y)
                } else if (cmd.type === 'C') {
                    bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y)
                } else if (cmd.type === 'Q') {
                    quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y)
                } else if (cmd.type === 'Z') {
                    endShape(CLOSE)
                }
            }
        }
