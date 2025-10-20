function setup() {
  createCanvas(windowWidth,windowHeight);
  time = 0;
  textAlign(CENTER);
  textSize(32);
  frame = 0
}

function draw() {
  frame += 1
  background(70);

  time = time + 1/60;
  fill(240,0,0)
  text("Time: " + time.toFixed(0), windowWidth/2, 40);

  for(let y=80; y<windowHeight; y += 50){
      //y = (1-20^-x/100)
    
    for(let x=0; x<windowWidth; x+= 50){
      fill(160,130,120);
      strokeWeight(5);
      stroke(100,70,60);
      square(x,y,50);
      strokeWeight(0);
    }
  }
}