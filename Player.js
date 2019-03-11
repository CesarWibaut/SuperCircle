class Player {

  constructor() {
    this.angle = 0;
    this.acceleration = 0;
  }

  update() {
    this.angle += this.acceleration;
    if (this.angle >= 2) this.angle -= 2;
    if (this.angle <= -2) this.angle += 2;
  }

  draw() {
    fill(255, 0, 255);
    noStroke();
    ellipse(cos((PI * this.angle)) * 40, sin((PI * this.angle)) * 40, width / 30);
  }

  hit(circle) {
    let pt = createVector(cos(this.angle * PI) * width / 15, sin(this.angle * PI) * width / 15);
    let v1 = createVector(cos(circle.angle) * circle.size / 2, sin(circle.angle) * circle.size / 2);
    let v2 = createVector(cos(circle.angle - PI / 3) * circle.size / 2, sin(circle.angle - PI / 3) * circle.size / 2);
    let v3 = v1.copy();
    v3.add(v2);
    return !this.pointInTriangle(pt, v1, v2, v3);
    
  }

  sign(p1,  p2,  p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }

  pointInTriangle( pt,  v1,  v2,  v3) {
    let d1, d2, d3;
    let has_neg, has_pos;

    d1 = this.sign(pt, v1, v2);
    d2 = this.sign(pt, v2, v3);
    d3 = this.sign(pt, v3, v1);

    has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(has_neg && has_pos);
  }
}