class Bob {
    constructor(x,y,radius){
     var options = {
         isStatic: false,
         restitution: 0.3,
         friction: 0.5,
         density: 1.2
     }

     this.body = Bodies.circle(x, y,radius, options);
     this.radius = radius;
     World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        stroke(0);
        strokeWeight(2);
        fill(255, 41, 251);
        ellipse(0, 0, this.radius);
        pop();
      }
    }
