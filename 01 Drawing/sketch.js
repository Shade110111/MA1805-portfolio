function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(205);

  //head
head_x=400
head_y=400
strokeWeight(0)
fill(215,175,195)
ellipse(head_x, head_y,170,260);
fill(150,40,40)
ellipse(head_x, head_y-100,165,80);

  //headset
headset_x=350
headset_y=350
strokeWeight(0)
fill(20,120,160)
rect(headset_x,headset_y,100,100);
circle(headset_x,headset_y+50,100);
circle(headset_x+100,headset_y+50,100);

}
