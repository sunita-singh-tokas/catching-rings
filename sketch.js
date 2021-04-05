var ringImg1, ringImg2, ringImg3, ringImg4;
var ring1, ring2, ring3, ring4;
var boxObj, boxImg;
var plane; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ringImg1 = loadImage("images/ring1.png");
	ringImg2 = loadImage("images/ring2.png");
	ringImg3 = loadImage("images/ring3.png");
	ringImg4 = loadImage("images/ring4.png");
	boxImg   = loadImage("images/box.png")
}

function setup() {
	createCanvas(800, 700);

	edges = createEdgeSprites();

	boxObj= createSprite(100,550);
	boxObj.addImage(boxImg);
	boxObj.scale = 0.6; 
	boxObj.velocityX = 8;

	plane = createSprite(0,680,1600,60);
	plane.shapeColor = rgb(153,0,0);

	engine = Engine.create();
	world = engine.world;

	ring1 = createSprite(120, 50);
	ring1.addImage(ringImg1);
	ring1.scale=0.1;

	ring1Body = Bodies.circle(120 , 50 ,3, {restitution:0.4, isStatic:true});
	World.add(world, ring1Body);

	ring2 = createSprite(300, 50);
	ring2.addImage(ringImg2);
	ring2.scale=0.1;

	ring2Body = Bodies.circle(300, 50 ,5, {restitution:0.4, isStatic:true});
	World.add(world, ring2Body);

    ring3 = createSprite(500, 50);
	ring3.addImage(ringImg3);
	ring3.scale=0.1;

	ring3Body = Bodies.circle(500, 50 ,5, {restitution:0.4, isStatic:true});
	World.add(world, ring3Body);

	ring4 = createSprite(660, 50);
	ring4.addImage(ringImg4);
	ring4.scale=0.1;

	ring4Body = Bodies.circle(660, 50 ,5, {restitution:0.4, isStatic:true});
	World.add(world, ring4Body);


	Engine.run(engine);
}


function draw() {
  background(0);
  boxObj.bounceOff(edges);
  // boxBase.bounceOff(edges);
  // boxrightSprite.bounceOff(edges);

  ring1.x= ring1Body.position.x;
  ring1.y= ring1Body.position.y;

  ring2.x= ring2Body.position.x;
  ring2.y= ring2Body.position.y;

  ring3.x= ring3Body.position.x;
  ring3.y= ring3Body.position.y;

  ring4.x= ring4Body.position.x 
  ring4.y= ring4Body.position.y

  // if(ring1.isTouching(boxObj)){
  // 	Matter.Body.setStatic(ring1Body,true);	
  // }

  drawSprites();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW) {
		Matter.Body.setStatic(ring1Body,false);
	}else if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(ring2Body,false);		
	}else if(keyCode === UP_ARROW){
		Matter.Body.setStatic(ring3Body,false);			
	}else if(keyCode === RIGHT_ARROW){
		Matter.Body.setStatic(ring4Body,false);	
	}
}
