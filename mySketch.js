
var t;
var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    background(255);
	t = 0;
}

function draw() {
   
  background(255, 25);
  var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
 
	noStroke();
	fill(r, g, b, 20);
	ellipse(mouseX, mouseY, mouseX/3, mouseX/3);
  
    fill(r, g, b, 20);
    ellipse(mouseY, mouseX, mouseX/3, mouseX/3); 
    
    fill(r, g, b, 20);
    ellipse(windowWidth-mouseX, windowHeight-mouseY, mouseX/4, mouseX/4);
  
    fill(r, g, b, 20);
    ellipse(windowWidth-mouseY, windowHeight-mouseX, mouseX/4, mouseX/4);
	
  t = t + 0.01;

}