
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var tree;

function preload()
{
	treeImg=loadImage("tree.png");
    boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1350, 650);
console.log(mouseX,mouseY)

	engine = Engine.create();
	world = engine.world;

	g1=new Ground(620,630,1700,40)
	//tree=createSprite(1000,400,50,400)
	//tree.addImage("tree.png")
	// t1=new Tree(1000,400,0,0);
	// b1=new Boy(200,600,150,300);

	s1=new Stone(170,400,20,20);
	m1=new Mango(1090,370,20)
    m2=new Mango(1200,390,20)
    m3=new Mango(1250,300,20)
    m4=new Mango(1150,280,20)
    m5=new Mango(1130,230,20)
    m6=new Mango(1270,350,20)
	string1 = new String({x:220,y:500},s1.body)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  g1.display();
  
//   t1.display();
//   b1.display();
  s1.display();
  string1.display()
  image(treeImg,1000,150,300,500)
  image(boyImg,200,430,100,250)
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  drawSprites();
  detectCollision(s1,m1)
  detectCollision(s1,m2)
  detectCollision(s1,m3)
  detectCollision(s1,m4)
  detectCollision(s1,m5)
  detectCollision(s1,m6)
 
}

function mouseDragged(){
    Matter.Body.setPosition(s1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        string1.attach(s1.body);
    }
}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango.radius+stone.width/2)
Matter.Body.setStatic(mango.body,false)

}



