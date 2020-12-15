class paper{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0.5,
            friction: 0.1,
            density: 1.2
        }  
        this.r = 50;  
this.body = Bodies.circle(x,y,this.r,options);
this.image = loadImage("paper.png");

World.add(world,this.body);
    }

    display(){
var pos = this.body.position;

image(this.image,pos.x,pos.y,this.r,this.r);

    }
}
