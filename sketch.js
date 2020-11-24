
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var Bobdiameter=50

function preload()
{
	//tableimg=loadImage("table.png")
}

function setup() {
	createCanvas(970, 600);
    
    


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    fill("#9DC88D")
    roof1=new ROOF(470,150,520,30)
    roof2=new ROOF(220,295,30,330)
    roof3=new ROOF(715,295,30,330)
    roof4=new ROOF(471,450,560,30)
    
   
    ground=createSprite(500,534,1030,150)
     ground.shapeColor=color(random(20,255), random(20,255), random(20,255));

    
    
	bob = new BOB(400, 350,50 );
	bob2 = new BOB(450, 350 ,50);
	bob3 = new BOB(350, 350 ,50);
	bob4 = new BOB(500, 350,50 );
	bob5 = new BOB(300, 350,50 );

	//roof = new R(500,100,400,20);
    
rope1 = new Rope(bob.body, roof1.body, 0, 0)
	rope2 = new Rope(bob2.body, roof1.body, 50,0)
	rope3 = new Rope(bob3.body, roof1.body, -50,0)
	rope4 = new Rope(bob4.body, roof1.body, 100,0)
	rope5 = new Rope(bob5.body, roof1.body, -100,0)
	

    
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  
  roof1.display()
    roof2.display()
    roof3.display()
    roof4.display()
    
    bob.display()
    bob2.display()
    bob3.display()
    bob4.display()
    bob5.display()
    
  rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
    
  drawSprites();
 
}

function mouseDragged(){
	
		Matter.Body.setPosition(bob5.body, {x:mouseX,y:mouseY});
	 
	
}
function mouseReleased(){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:280,y:-130});
	
	
}


