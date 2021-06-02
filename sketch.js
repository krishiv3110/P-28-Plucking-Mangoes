const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;
//	Engine.run(engine);
  
	treeObj=new tree(1050,580);

	mango1=new mango(1090,40,30);
	mango2=new mango(1125,120,30);
	mango3=new mango(1000,200,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1105,220,30);
	mango6=new mango(1200,200,30);
	mango7=new mango(1000,110,30);

	groundObject=new ground(width/2,600,width,20);
	
	stoneObj = new Stone(190,340,40)

	slingshot = new Slingshot(stoneObj.body,{x : 200 , y : 420});

	

}

function draw() {

	background(230);
	
    Engine.update(engine);

	//Add code for displaying text here!
	image(boy ,200,340,200,300);
	
	detectollision(stoneObj,mango1)
	detectollision(stoneObj,mango2)
	detectollision(stoneObj,mango3)
	detectollision(stoneObj,mango4)
	detectollision(stoneObj,mango5)
	detectollision(stoneObj,mango6)
	detectollision(stoneObj,mango7)

	treeObj.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	groundObject.display();
	stoneObj.display();
	slingshot.display();

//	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();

}
function keyPressed(){

	if(keyCode === 32){   

		if(slingshot.hasBody() === null){
			//	Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
			//	slingshot.attach(stoneObj.body);
			stoneObj = null;
			slingshot = null;

			stoneObj = new Stone(190,340,40)

			slingshot = new Slingshot(stoneObj.body,{x : 200 , y : 420});

			
			stoneObj.display();
			slingshot.display();
	
  	 }
   }
}	

function detectollision(Lstone,Lmango){

	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= Lmango.r + Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}
