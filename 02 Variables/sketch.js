function setup() {
  createCanvas(800, 800);
  let x;
  strokeWeight(0);

  textAlign(CENTER);
  textSize(20);
  text('Click me to explore the city!',400,400);
}

function mouseClicked() {
  background(50+random(100));
  x = random(20,60);
  for (let i=0;i<x;i++){
    fill(random(60,130));

    //buildings
    let x=random(0,width);
    let y=random(0,height);
    let w=random(15,400);
    let h=random(15,400);
    //adjust x and y to be balanced
    x=x-w/2
    y=y-h/2

    //buildings
    rect(x,y,w,h);

    //pillars
    let pillarWidth = 7;
    if (random(0,1)>0.8){
      let pillar_x = random(x+5,x+w-5)-pillarWidth/2;
      let pillar_y = y+h
      rect(pillar_x,pillar_y, pillarWidth, 1000)
      //flip x for other pillar
      pillar_x=(w-(pillar_x-x))+x-pillarWidth
      rect(pillar_x,pillar_y, pillarWidth, 1000)
    }

    //plant pots
    let pot_x = random(x,w+x)-7/2;
    let pot_y = y-9
    fill(200,100,100);
    rect(pot_x,pot_y,7,9);
    fill(100,50,50);
    rect(pot_x+2,pot_y-9,3,9);
    fill(random(90,130),random(160,190),100);
    rect(pot_x+1,pot_y-13,5,random(7,11));

    

  }
}