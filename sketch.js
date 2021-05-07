const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin;
var ball;
var ground;
var roof;
var launcher;



function setup() {
	createCanvas(800,700);
	
	engine = Engine.create();
	world = engine.world;

  ball = new Paper(100,500,30);
  ground = new Ground(width/2,650,1000,10);
  roof = new Ground(width/2,100,1000,10);
  dustbin = new Dustbin(600,680);
  launcher = new Launcher(ball.body,{x:100,y:300});
	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(100);
  

  ball.display();
  ground.display();
  dustbin.display();
  launcher.display();
  roof.display();
  
  
 
}
function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
  launcher.fly();
}


