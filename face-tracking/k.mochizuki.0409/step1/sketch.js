// available:
// 鼻 noseX, noseY
// 口 mouthX, mouthY, mouthW, mouthH
// 眼 eyeLX, eyeLY, eyeRX, eyeRY

let f = 0;

function setup() {
  createCanvas(640, 480);
  setupTracking();
}

function draw() {
  image(video, 0, 0, width, height);
  drawTracking();
  
  // eye
  let distance = eyeRX - eyeLX;
  let l_offset = (eyeLH/15 > 0.8) ? eyeLH/15 : 0.2;
  let r_offset = (eyeRH/15 > 0.8) ? eyeRH/15 : 0.2;
  
  ellipse(eyeLX, eyeLY, distance/2, distance * l_offset);
  ellipse(eyeRX, eyeRY, distance/2, distance * r_offset);
  line(eyeLX, eyeLY, eyeRX, eyeRY);

  // mouth
  rect(mouthX - mouthW/2, mouthY - mouthH/2, mouthW, mouthH*1.2);
  
  if(mouthH > 30){
    for(let i=0; i < 300; i++){
      ellipse((mouthX) + (sin(i+f) * i * 0.5), (mouthY) + (cos(i+f) * i * 0.5), 5, 5);
    }
  }
  f++;

  // translate(noseX, noseY);
  // translate(0, -280);
  // triangle(30,75,58,20,86,75);
}
