class Ball {
  constructor(x,y,radiusX,radiusY) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
     this.body = Bodies.ellipse(x,y,radiusX,radiusY,options);
     this.radiusX = radiusX;
     this.radiusY = radiusY;
     World.add(world,this.body);
  }

  display() {
    var pos = this.body.position;
    fill("white");
    ellipse(pos.x,pos.y,this.radiusX,this.radiusY,options);
  

  }
}
