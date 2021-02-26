var starImg, fairyImg, backgroundImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	backgroundImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY = 3;
	star.velocityX = 0;
	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(backgroundImg);

  edges= createEdgeSprites();
  fairy.collide(edges);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

   fairyVoice.play();

  if(starBody.position.y > 470){
	Matter.Body.isStatic(starBody > false);
}


  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyDown(LEFT_ARROW)){
		fairy.velocityX = -4;
		fairy.velocityY = 0;
	  }
	  
	  if(keyDown(RIGHT_ARROW)){
		fairy.velocityX = 4;
		fairy.velocityY = 0;
	  }

	  if (keyDown(DOWN_ARROW)){
		star.velocityX = 3;
		star.velocityY = 3;
	  }










}
