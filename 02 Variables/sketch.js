function setup() {
  createCanvas(800, 800);
  let x;

  strokeWeight(0);
}

function mouseClicked() {
  background(50+random(100));
  x = random(20,60);
  for (let i=0;i<x;i++){
    fill(50+random(100));

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

    //plant pots
    let pot_x = random(x,w+x)-7/2;
    let pot_y = y-10
    fill(200,100,100);
    rect(pot_x,pot_y,7,10);
  }
}