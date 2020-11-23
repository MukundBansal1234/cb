class Dustbin{
    constructor(x, y,width,height) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y,width,height, options);
    this.width = width;
    this.height = height;
   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;  
    
    push();
    translate(pos.x, pos.y);
   fill("yellow");
    rectMode(CENTER);
    rect(this.width,this.height,0,0);
    pop();
  }
};