currentx = 100;
currenty = 100;

CIRCLESIZE = 100;

function setup() {
  createCanvas(1000, 1000);
  fill(0);
  ellipse(currentx, currenty, CIRCLESIZE, CIRCLESIZE);
}

function draw() {
  fill(255);
  ellipse(currentx, currenty, CIRCLESIZE, CIRCLESIZE);
  currentx = mouseX;
  currenty = mouseY;
  fill(0);  
  ellipse(currentx, currenty, CIRCLESIZE, CIRCLESIZE);
}
