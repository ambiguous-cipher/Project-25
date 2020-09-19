
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 640);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	paper1 = new Paper();
	trashCan = new TrashSides(1000, 550);
	
	
	groundBody = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
	fill(255, 0, 0);
	World.add (world, groundBody);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	rect(groundBody.position.x, groundBody.position.y, canvas.width, 100);
	fill(255);
	//Bodies.applyForce(World.Bodies(world, bodies))
	
	keyPressed();
	paper1.display();
	trashCan.display()
	drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position ,{x: 15, y: -25});
	}
}
