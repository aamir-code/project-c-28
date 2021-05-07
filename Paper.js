class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:100,
            density:1.2
        }
        this.radius=radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("paperObj.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius-10),options);
        World.add(world,this.body);
    }
    display() {
        var Paperpos = this.body.position;

        push();
        translate(Paperpos.x,Paperpos.y);
        rectMode(CENTER);

        fill(255);
        imageMode(CENTER);

        image(this.image,0,0,2*this.radius,2*this.radius);
        pop();
    }
}