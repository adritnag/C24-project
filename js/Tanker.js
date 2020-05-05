class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(40,760,100,100,options);
     
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      fill(255); 
      rectMode(CENTER);
ellipse(80,730,100,100);
rect(80,770,110,20);
rect(80,750,110,20);

  
    };
}
