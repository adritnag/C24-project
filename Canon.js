class Canon {
    constructor() {
        var options = {
        isStatic: true
       }
       
       this.body =  Bodies.rectangle(150,720,70,20,options);
Matter.Body.setAngle(this.body,this.body.angle); 


    };
  
      display(){
        
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
        fill(255); 
        
        rectMode(CENTER);
  
        
  rect(150,720,70,20);
      };
      
  }