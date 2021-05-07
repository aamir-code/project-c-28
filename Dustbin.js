class Dustbin{
    constructor(x, y) {
        var options = {
        isStatic:true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.LeftBody = Bodies.rectangle(x-95+40,y-60-10-50,20,100,options);
    this.RightBody = Bodies.rectangle(x+95-40,y-60-10-50,20,100,options);
    this.BottomBody = Bodies.rectangle(x,y-60,100,20,options);
    this.image = loadImage("dustbingreen.png");
    World.add(world,this.LeftBody);
    World.add(world,this.RightBody);
    World.add(world,this.BottomBody);
    }

    display() {
        
        
        push();
        rectMode(CENTER);

        fill(255);
        imageMode(CENTER);

        
        rect(this.BottomBody.position.x,this.BottomBody.position.y,100,20);
        rect(this.LeftBody.position.x,this.LeftBody.position.y,20,100);
        rect(this.RightBody.position.x,this.RightBody.position.y,20,100);
        image(this.image,this.BottomBody.position.x,this.BottomBody.position.y-50,142,160);
        pop();
    }
}