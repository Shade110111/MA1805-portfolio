function setup() {
  createCanvas(800, 800);
  i = 0 //frame counter
}

function draw() {
  background(205);
  i=i+1 //increment frame counter
  slow_nod=(sin(i/100)/32) //nod oscilates +-0.0625, 6000 frame period

//body
body_x=400
body_y=530
fill(195,145,165)
circle(body_x, body_y, 80);

//head
head_x=(slow_nod+1)*400
head_y=400
strokeWeight(0)
fill(215,175,195)
ellipse(head_x, head_y,170,260);
//hair
fill(80,50,50)
ellipse(head_x, head_y-100,165,90);
ellipse(head_x-75, head_y-60,35,80);
ellipse(head_x+75, head_y-60,35,80);
//facial hair
rect(head_x-40,head_y+55, 80, 80, 23);
fill(215,175,195)
rect(head_x-20,head_y+70, 40, 35, 11);

//headset
headset_x=((slow_nod*2)+1)*350
headset_y=350
strokeWeight(0)
fill(50,110,150)
rect(headset_x,headset_y,100,100);
circle(headset_x,headset_y+50,100);
circle(headset_x+100,headset_y+50,100);
//headset front panel
headset_front_x=((slow_nod*2.3)+1)*350
headset_front_y=350
fill(80,130,170)
rect(headset_front_x+5,headset_front_y+5,90,90);
fill(60,120,160)
rect(headset_front_x+15,headset_front_y+15,70,70);
circle(headset_front_x,headset_front_y+50,90);
circle(headset_front_x+100,headset_front_y+50,90);

}
