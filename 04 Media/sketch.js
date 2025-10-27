

function setup() {
  createCanvas(windowWidth,windowHeight);
  window_width = 300;
  window_height = 400;
  window_x = (windowWidth*0.75) - window_width/2;
  window_y = (windowHeight*0.25) - window_height/2;
}

function draw() {
  background(80);
  fill(250,110,80);
  strokeWeight(0)
  rect(window_x,window_y,window_width,window_height,2,2,2,2);
}
