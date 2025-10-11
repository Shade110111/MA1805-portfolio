function setup() {
  createCanvas(800, 800);
  i = 0 //frame counter
}

function draw() {
  background(210,210,220);
  i=i+1 //increment frame counter
  slow_nod=(sin(i/100)/32) //nod oscilates +-0.0625, 6000 frame period

//shawl_back
fill(50,100,140)
triangle(580,590,220,590,400,1000);
//body
body_x=400
body_y=530
//hood
fill(120,120,140)
ellipse(body_x,body_y-20,190,110);
//undershirt
fill(200,200,230)
rect(body_x-100, body_y-20, 200, 300, 50);
//neck
fill(195,145,165)
circle(body_x, body_y, 80);
triangle(body_x-13,body_y+50,body_x-26,body_y,body_x+30,body_y);
//hoodie
fill(120,120,140)
rect(body_x-170, body_y-20, 140, 300,100,0,0,0);
rect(body_x+30, body_y-20, 140, 300,0,100,0,0);
//shawl
fill(60,120,160)
triangle((((sin(i/8)/128)*0.9)+1)*460,800,610,800,580,590);//(((sin(i/period)/inverse amplitude)*amplitude)+1)*rest position,other coordinate)
triangle((((sin(i/9)/128)*0.9)+1)*340,800,190,800,220,590);//(((sin(i/period)/inverse amplitude)*amplitude)+1)*rest position,other coordinate)
//hoodie strings
fill(100,100,110)
strokeWeight(8)
stroke(200,200,230)
line(460,550,(((sin(i/6)/128)*0.5)+1)*460,700);//(((sin(i/period)/inverse amplitude)*amplitude)+1)*rest position,other coordinate)
line(340,550,(((sin(i/7)/128)*0.5)+1)*340,700);//(((sin(i/period)/inverse amplitude)*amplitude)+1)*rest position,other coordinate)

//head
head_x=(slow_nod+1)*400
head_y=400
strokeWeight(0)
fill(215,175,195)
ellipse(head_x, head_y,170,260);
//hair
hair_x=((slow_nod*1.3)+1)*400
fill(80,50,50)
ellipse(hair_x, head_y-100,165,90);
ellipse(head_x-75, head_y-60,35,80);
ellipse(head_x+75, head_y-60,35,80);
triangle(head_x+70,head_y-100,head_x+90,head_y-20,head_x+70,head_y);
triangle(head_x-70,head_y-100,head_x-90,head_y-20,head_x-70,head_y);
//facial hair
rect(hair_x-40,head_y+55, 80, 80, 23);
fill(215,175,195)
rect(hair_x-20,head_y+70, 40, 35, 11);

//headset
headset_x=((slow_nod*2.3)+1)*350
headset_y=350
strokeWeight(0)
//headset straps
fill(40,90,130)
rect((((slow_nod*1.5)+1)*350)-50,headset_y+35,200,30,2);
//headset body
fill(50,110,150)
rect(headset_x,headset_y,100,100);
circle(headset_x,headset_y+50,100);
circle(headset_x+100,headset_y+50,100);
//headset front panel
headset_front_x=((slow_nod*2.6)+1)*350
headset_front_y=350
fill(80,130,170)
rect(headset_front_x+5,headset_front_y+5,90,90);
fill(60,120,160)
rect(headset_front_x+15,headset_front_y+15,70,70);
circle(headset_front_x,headset_front_y+50,90);
circle(headset_front_x+100,headset_front_y+50,90);


}
