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
    
  let l_offset;
  
  if (eyeLH/15 > 0.8) {
    l_offset = eyeLH / 15;
  } else {
    l_offset = 0.2;
  }
  
  
  let r_offset;
  
  if (eyeLH/15 > 0.8) {
    r_offset = eyeLH / 15;
  } else {
    r_offset = 0.2;
  }
  
  ellipse(eyeLX, eyeLY, distance/2, distance * l_offset);
  
  ellipse(eyeRX, eyeRY, distance/2, distance * r_offset);

    
  

}
