let font
        let fSize // font size
        let msg // text to write
        let pts = [] // store path data

        function preload() {
            // preload OTF font file
            font = loadFont('Inconsolata.otf')
        }

        function setup() {
            createCanvas(800, 500)
            
            fSize = 256
            textFont(font)
            textSize(fSize)
            msg = 'Prova!'
            pts = font.textToPoints(msg, 0, 0, fSize, {
                sampleFactor: 0.1, // increase for more points
                simplifyThreshold: 0.0 // increase to remove collinear points
            })
            console.log(pts) // { x, y, path angle }

            stroke(255)
            strokeWeight(2)
            noFill();
        }

        function draw() {
            background(0)

            // 1. interactive
            // const d = dist(mouseX, mouseY, width/2, height/2)
            // const angle = atan2(mouseY-height/2, mouseX-width/2)

            // 2. animate on its own
//            const d = 10 + sin(frameCount/50.) * 50
            const d = 0.2;
//            const angle = frameCount/100.
            const angle = 0.;

            push()
            translate(60, height*5/8)

            for (let i = 0; i < pts.length; i++) {
                const p = pts[i]
                push()
                translate(p.x, p.y)
                rotate(angle)
                line(-d, -d, +d, +d)
                pop()
            }
            pop()
        }
