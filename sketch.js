
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground1;
var paperball;
v//ar dustbinimg;


function preload(){
dustbinimg = loadImage("dustbin.png");

}


function setup() {
	
	createCanvas(1200, 620);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground1 = new ground(600,600,1200,20);
	box1 = new box(900,583,140,15);
	box2 = new box(835,530,15,110);
	box3 =new box(970,530,15,110);
	paperball= new paper(200,400,60);
	



keyPressed();
Engine.run(engine);

}


function draw() {

  background("powderblue");
  

  ground1.display();
 box1.display();
 box2.display();
 box3.display();
 paperball.display();
 image(dustbinimg,822,435,165,160);

 drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(paperball.body,paperball.body.position,{x: 400, y: -515});
	}
}




