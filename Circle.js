class Circle {
  
  constructor () {
   this.size = width;
    let r = random();
    this.angle = map(r, 0, 1, -PI, PI); 
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  
  update() {
   this.size -= 8; 
  }
 	draw () {
    stroke(this.r, this.g, this.b);
    noFill();
    strokeWeight(3);
    arc(0,0,this.size,this.size,this.angle,this.angle -PI/3)
  }
  
  canBeDestroyed() {
   return this.size < ROUND_SIZE +10; 
  }
}