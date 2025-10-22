let time = 0;
let y=0;
let x=0;
let clockWidth = 100;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(32);
  textFont('Courier New');
}
//setup consistent seeds for cubicles
let seeds = [];
let cubicle_y = 0;
let cubicle_x = 0;
incriment = 1
for(let y=100; y < windowHeight; y += incriment){
  if (incriment < 50){
    incriment += 1
  }
  //y code
  seeds[cubicle_y] = [];
  cubicle_y=cubicle_y+1
  for(let x=0; x<windowWidth; x+= 50){
    //x code
    seeds[cubicle_y][cubicle_x] = random(0,1);
    cubicle_x=cubicle_x+1
  }
  console.log(seeds);
}



function draw() {
  background(40);
  fill(45);
  ellipse(windowWidth/2,100,windowWidth,200);

  //clock art
  fill(70);
  rect((windowWidth-clockWidth-10)/2,0,clockWidth+10,58,0,0,4,4);
  circle((windowWidth-clockWidth-10)/2,0,30);
  circle((windowWidth+clockWidth+10)/2,0,30);
  fill(20);
  rect((windowWidth-clockWidth)/2,5,clockWidth,48);


  //clock logic
  time = time + 1/60; //floating point time in seconds
  let hours = (Math.floor((time/60)+5)).toString().padStart(2, '0');
  let minutes = (Math.floor(time)-((Math.floor(time/60))*60)).toString().padStart(2, '0');
  fill(240,0,0)
  text(hours + ":" + minutes, windowWidth/2, 40);

  //grid logic
  cubicle_y = 0;
  cubicle_x = 0;

  incriment = 1 //for perspective effect
  for(let y=100; y < windowHeight; y += incriment){
    if (incriment < 50){
      incriment += 1 //for perspective effect
    }
    cubicle_y=cubicle_y+1
    for(let x=0; x<windowWidth; x+= 50){
      fill(160,130,120);
      strokeWeight(4);
      stroke(100,70,60);
      square(x,y,50); //cubicles, from here on is decour
      strokeWeight(0);
      //mini clocks
      if ((seeds[cubicle_y][cubicle_x])>0.5){
        fill(140,160,140);
        circle(x+37,y+13,12);
        fill(190);
        circle(x+37,y+13,9);
      }
      cubicle_x=cubicle_x+1
    }

  }
}