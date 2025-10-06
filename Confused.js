i=1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill('rgba(70%,85%,100%,0.1)');
  circle(200,200,400);
  fill('rgba(100%,100%,100%,0.1)');
  circle(200+(100*(sin(i/60))),200+(100*(cos((i)/60))),200);
  circle(200+(100*(sin((i-90)/60))),200+(100*(cos((i-90)/60))),200);
  circle(200+(100*(sin((i-180)/60))),200+(100*(cos((i-180)/60))),200);
  circle(200+(100*(sin((i-270)/60))),200+(100*(cos((i-270)/60))),200);
 
  circle(200+(100*(cos(i/60))),200+(100*(sin((i)/60))),200);
  circle(200+(100*(cos((i-90)/60))),200+(100*(sin((i-90)/60))),200);
  circle(200+(100*(cos((i-180)/60))),200+(100*(sin((i-180)/60))),200);
  circle(200+(100*(cos((i-270)/60))),200+(100*(sin((i-270)/60))),200);
 
  ellipse(200, 200, 400*sin(i/60), 400);
  ellipse(200, 200, 400*sin((i-90)/60), 400);
  ellipse(200, 200, 400, 400*sin(i/60));
  ellipse(200, 200, 400, 400*sin((i-90)/60));
  i+=1
  fill('rgba(0%,0%,0%,1)');
  textAlign(CENTER);
  textSize(40);
  text('Confused?',200,200);
 
  line(100,205,300,205);
 
  cursor('progress');

}
