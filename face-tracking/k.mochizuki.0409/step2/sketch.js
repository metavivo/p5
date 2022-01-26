let f = 0;

function setup() {
  createCanvas(640, 480);
  setupTracking();
}

function draw() {

// Show webcam
  image(video, 0, 0, width, height);
  
  
  
  // eye
  let distance = eyeRX - eyeLX;
  let l_offset = (eyeLH/15 > 0.8) ? eyeLH/15 : 0.2;
  let r_offset = (eyeRH/15 > 0.8) ? eyeRH/15 : 0.2;
  
  ellipse(eyeLX, eyeLY, distance/2, distance * l_offset);
  ellipse(eyeRX, eyeRY, distance/2, distance * r_offset);
  line(eyeLX, eyeLY, eyeRX, eyeRY);

  
  

}
