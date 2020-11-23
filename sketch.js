
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball1;
var ground;
var dustbin1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperball1 = new Paper(200,640,1);
    dustbin1 = new Dustbin(500,600,200,10);
    ground = new Ground(0,650,800,20)

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball1.display();
  ground.display();
  dustbin1.display();
drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}


