class BOB {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:1.3,
          friction:0.1,
          density:3
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      
      World.add(world, this.body);
    }
    display(){
      
        var pos =this.body.position;
         var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
        rotate(angle)
    rectMode(CENTER);
    stroke(color(random(20,255), random(20,255), random(20,255)));

     fill ("black")
    ellipse(0, 0, this.radius,this.radius);
    pop();
  }
  }