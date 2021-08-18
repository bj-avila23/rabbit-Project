var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves;
var appleImg,leavesImg;
var randomobjects;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
// Moving background
garden=createSprite(width/2,height/2);
garden.addImage("garden",gardenImg);
  


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit",rabbitImg);

}


function draw() {
  background(0);
  
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
if(frameCount%80===0){
  
  randomobjects=Math.round(random(1,2));
if(randomobjects===1){
  createLeaves();
}
else if(randomobjects===2){
  createApples();
}
}

  drawSprites();
}

function createApples(){
  apple=createSprite(random(50,350),40);
  apple.velocityY=2;
  apple.scale =0.05;
  apple.addImage("apple",appleImg);
  
  
  }

function createLeaves(){
  
leaves=createSprite(random(50,350),40);
leaves.velocityY=2;
leaves.scale =0.05;
leaves.addImage("leaves",leavesImg);

}

