let time = 0;
let y=0;
let x=0;
let clockWidth = 100;
let seeds = []; //2D array for cubicle seeds

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(32);
  textFont('Courier New');

  //setup consistent seeds for cubicles
  let cubicle_y = 0;
  let increment = 1;

  for(let y=100; y < windowHeight; y += increment){
    if (increment < 50){
      increment += 1
    }
    
    seeds[cubicle_y] = [];
    for(let x=0; x<windowWidth; x+= 50){
      seeds[cubicle_y].push(random(0,1));
    }
    cubicle_y = cubicle_y+1;
  }
}

function draw() {
  background(40);
  strokeWeight(0)
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

  increment = 1 //for perspective effect
  for(let y=100; y < windowHeight; y += increment){
    if (increment < 50){
      increment += 1 //for perspective effect
    }
    
    for(let x=0; x<windowWidth; x+= 50){
      let brightness = ((y+150)/windowHeight)/2+0.4;
      fill(160*brightness,130*brightness,120*brightness);
      strokeWeight(4*brightness);
      stroke(100*brightness,70*brightness,60*brightness);
      square(x,y,50); //cubicles, from here on is decour
      strokeWeight(0);
      
      if ((seeds[cubicle_y][cubicle_x])>0.3){
        //mini clocks
        stroke(150*brightness,170*brightness,150*brightness);
        strokeWeight(1);
        fill(210*brightness);
        circle(x+37,y+13,9);
        //cork boards
        stroke(130*brightness,90*brightness,90*brightness);
        fill(150*brightness,110*brightness,110*brightness);
        rect(x+5,y+7,23,14);
        
      }
      else {
        //mini clocks
        stroke(150*brightness,170*brightness,150*brightness);
        strokeWeight(1);
        fill(210*brightness);
        circle(x+12,y+13,9);
        //cork boards
        stroke(130*brightness,90*brightness,90*brightness);
        fill(150*brightness,110*brightness,110*brightness);
        rect(x+22,y+7,23,14);
      }
      //desk
      strokeWeight(0);
      fill(140*brightness,100*brightness,100*brightness);
      rect(x+10,y+24,30,13);
      rect(x+12,y+37,2,13);
      rect(x+36,y+37,2,13);
      //computer
      strokeWeight(1);
      stroke(20*brightness,20*brightness,20*brightness);
      fill(45*brightness,45*brightness,45*brightness);
      rect(x+19,y+20,12,9);



      cubicle_x = cubicle_x+1
    }
    cubicle_y = cubicle_y+1;
    cubicle_x = 0;
  }
}