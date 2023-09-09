let song;

function preload() {
  song = loadSound('anime-wow-sound-effect.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0, 255, 0);
}

function draw(){
  background(0, 255, 0);

    t = frameCount/60;
  text(t, 100, 100);
  if(frameCount/60 == 3){
    song.stop();  
  }

}
