let wall;
let window;
let click;

function preload() {
  wall = loadImage('brushed_concrete_diff_4k.jpg');
  window = loadImage('04 Media/Screenshot 2025-10-27 at 15.46.49.png');
  //click = loadSound('');
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
  fill(230,130,80);
  strokeWeight(0)
  image(window,window_x,window_y,window_width,window_height);
}
