const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var town1,town2;

var bridge;

var join,join1;

var stone,stone2,stone3,stone4,stone5,stone6;




function preload(){
  //rock = loadImage("stone.png");
  bg_img = loadImage("background.jpg");
  //town = loadImage("background.png");
  rope = loadImage("wood.png");

}

function setup() {
  createCanvas(900, 700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  town1 = new Town(100,300,250,50);
 // town1.addImage(town);
  town2 = new Town(800,300,250,50);

  bridge = new Bridge(18,{x:80,y:260});
  bridge.addImage(rope);


  
  Matter.Composite.add(bridge.body,town2)
 
  join1 = new Link(bridge,town2);
 
  stone = new Stone(300,100,10,10);
  //stone.addImage(rock);
  stone2 = new Stone(500,100,10,10);
  //stone2.addImage(rock);
  stone3 = new Stone(500,50,10,10);
  //stone3.addImage(rock);
  stone4 = new Stone(350,50,10,10);
  //stone4.addImage(rock);
  stone5 = new Stone(500,50,10,10);
 // stone5.addImage(rock);
  stone6 = new Stone(500,30,10,10);
 // stone6.addImage(rock);
  
   imageMode(CENTER);
  rectMode(CENTER);
 //ellipseMode(RADIUS);
  textSize(50);
 // imageMode(CENTER);

}

function draw() {
  background(51);
  image(bg_img,width/2,height/2,1000,1000);
  
  bridge.show();
  image(rope,bridge.position.x,bridge.position.y,100,100);
  Engine.update(engine);

  

  town1.display();
  town2.display();


  stone.display();
  
  stone2.display();
  
  stone3.display();
  
  stone4.display();
  
  stone5.display();

  stone6.display();


//drawSprites();

}






