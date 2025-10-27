let wall;
let window_image;
let click;
let hum;

function preload() {
  wall = loadImage('Concrete033_4K_Color.jpg');
  window_image = loadImage('window_city.png');
  click = loadSound('egg timer single.mp3');
  hum = loadSound('AAIA 18 Atmos Deep Rumbly Underwater Synthesised Low Clicky.wav');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  window_width = 280;
  window_height = 380;
  window_x = (windowWidth*0.75) - window_width/2;
  window_y = (windowHeight*0.25) - window_height/2;
}

function draw() {
  background(80);
  image(wall,0,0, windowWidth,windowHeight);
  fill(60);
  strokeWeight(0);
  rect(window_x-10,window_y-10,window_width+20,window_height+20);
  image(window_image,window_x,window_y,window_width,window_height);
  rect(window_x+60,window_y-1,20,window_height+2);
  rect(window_x+130,window_y-1,20,window_height+2);
  rect(window_x+200,window_y-1,20,window_height+2);

  //beat loop
  let counter = 0;
  let last_counter = 0;
  counter = Math.floor(frameCount / 25);
  textSize(32); //uncomment to debug beat counter
  text(counter, 50, 50); //uncomment to debug beat counter
  if (counter != last_counter) {
    click.play();
  }


  last_counter = counter;
}
function mouseClicked(){
  hum.loop();
  hum.amp(0.4); 
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
