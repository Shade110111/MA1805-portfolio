let time = 0;
let frame = 0
let y=0;
let x=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  frame += 1
  background(70);

  time = time + 1/60;
  fill(240,0,0)
  text("Time: " + time.toFixed(0), windowWidth/2, 40);

  for(let y_=80; y < windowHeight; y_ += 50){
    if y_ < 500 {
      y = 50*Math.exp(y_/500);
    } 
    else {
      y = y;
    }
    
    for(let x=0; x<windowWidth; x+= 50){
      fill(160,130,120);
      strokeWeight(5);
      stroke(100,70,60);
      square(x,y,50);
      strokeWeight(0);
    }
  }
}