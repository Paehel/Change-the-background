var r ;
var g ;
var b;
var ball; 

function setup(){
createCanvas(600,400);


r = 0;
g = 200;
b = 100;
  
}


function draw(){
  background("white");

  if(mouseX>= 100) {
    background(r,0,0);
  }
  
  if(mouseX >= 320) {
    background(0,g,0);
  }
  
  if(mouseX >= 500) {
    background(0,0,b);
  }
  fill("pink");
  ellipse(mouseX,100,20,20);

}
