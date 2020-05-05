class Ground {
  constructor() {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(0,790,800,20,options);
   
  };

  display(){
    
    rectMode(CENTER);
    rect(400,790,800,20);
    
  }
}
