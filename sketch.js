const player = new Player();
const circles = [];
const ROUND_SIZE = 70;
let difficulty;
let score;

function setup() {
  createCanvas(600, 600);
  circles.push(new Circle());
  difficulty = 60;
  score = 0;
  
  textAlign(CENTER, LEFT);
  textSize(50);
}

function draw() {
  
  angleMode(RADIANS);
  background(0);
  fill(255);
  text(score, 50,50);
  
  translate(width/2, height/2);
  
  
  if(frameCount%difficulty === 0) {
    circles.push(new Circle());
  }
  stroke(255);
  noFill();
  strokeWeight(2);
  ellipse(0,0,ROUND_SIZE);
  
  for(let i = circles.length -1;  i >= 0 ; i--){
   if(circles[i].canBeDestroyed()) {
     if(player.hit(circles[i])) {
       difficulty = 60;
       score =0;
     } else {
       score += 1;
     }
   	circles.splice(i, 1);
   }else {
     circles[i].update();
     circles[i].draw();
   }
  }
  player.update();
  player.draw();
}

function keyPressed () {
 	if(keyCode === RIGHT_ARROW) {
  	player.acceleration = 0.04;
  } else if(keyCode === LEFT_ARROW) {
  	player.acceleration = -0.04;
  }
}

function keyReleased() {
 player.acceleration = 0; 
}