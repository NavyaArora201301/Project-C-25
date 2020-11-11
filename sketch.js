const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var trash, rect1,rect2,rect3;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Bodies for trash can
	trash = new Trash(900,410,120,20);
	
	//creating ground
	ground = new Ground(600,490,1200,10);

	//creating the rectangles
	rect1 = new Ground(970,410,20,150);
	rect2 = new Ground(830,410,20,150);

	//creating the ball
	paper = new Paper(100,200,35);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  
  rect1.display();
  rect2.display();

  ground.display();
  paper.display();
  trash.display();
 
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}
}

