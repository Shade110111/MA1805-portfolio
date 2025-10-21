let time = 0;
let y=0;
let x=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  background(70);

  time = time + 1/60;
  fill(240,0,0)
  text("Time: " + time.toFixed(0), windowWidth/2, 40);

  incriment = 1 //for perspective effect
  for(let y=100; y < windowHeight; y += incriment){
    if (incriment < 50){
      incriment += 1 //for perspective effect
    }
    
    for(let x=0; x<windowWidth; x+= 50){
      fill(160,130,120);
      strokeWeight(4);
      stroke(100,70,60);
      square(x,y,50);
      strokeWeight(0);
      
    }

  }
}