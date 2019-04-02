currentx = 100;
currenty = 100;

function setup() {
  createCanvas(1000, 1000);
  fill(0);
  ellipse(currentx, currenty, 80, 80);
}

function draw() {
  fill(255);
  ellipse(currentx, currenty, 80, 80);
  currentx = mouseX;
  currenty = mouseY;
  fill(0);  
  ellipse(currentx, currenty, 80, 80);
}
