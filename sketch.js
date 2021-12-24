var score=0
var BackgroundImage,Astronout,Earth;
var AilienGroup,AilienImg
var Fuel,Goldcoin,Life;
var Asteriod,Reset1,Reset2,Shoot;
var Blast;
var life=3
var gameState=1

function preload() {
  BackgroundImg=loadImage("assets/background.jpg")
  AstronautImg=loadImage("assets/spaceship.png")
  AilienImg=loadImage("assets/ailein.png")
  EarthImg=loadImage("assets/earth.png")
  DestroyEarthImg=loadImage("assets/destroyearth.png")
  FuelImg=loadImage("assets/fuel.png")
  GoldcoinImg=loadImage("assets/goldcoin.png")
  LifeImg=loadImage("assets/life.png")
  AsteriodImg=loadImage("assets/asteroid.png")
  Reset1Img=loadImage("assets/reset1.png")
  Reset2Img=loadImage("assets/reset2.png")
  ShootImg=loadImage("assets/shoot.png")
  Shoot2Img=loadImage("assets/shoot2.png")
  BlastImg=loadImage("assets/blast.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  Background=createSprite(windowWidth,windowHeight/2);
  Background.addImage(BackgroundImg)
  Background.velocityX=-3

  Earth=createSprite(100,100,50,50)
   Earth.addImage(EarthImg)
   Earth.scale=1.5

  Astronaut=createSprite(300,500, 50,50)
  Astronaut.addImage(AstronautImg)

   Reset2=createSprite(1600,100,20,20)
   Reset2.addImage(Reset2Img)
   Reset2.scale=0.5



}

function draw(){
//background(BackgroundImg)

if (Background.x <0){
  Background.x = Background.width/2;
}

if(keyDown(UP_ARROW)){
  Astronaut.y=Astronaut.y-10
}

if(keyDown(DOWN_ARROW)){
  Astronaut.y=Astronaut.y+10
}

if(keyDown(RIGHT_ARROW)){
  Astronaut.x=Astronaut.x+10
}

if(keyDown(LEFT_ARROW)){
  Astronaut.x=Astronaut.x-10
}

AileinAttack();

if(keyDown("space")){
  Shoot();
}
drawSprites();
}

function Shoot(){
 shoot=createSprite(300,500,5,5) 
 shoot.x=Astronaut.x+50;
 shoot.y=Astronaut.y
 shoot.addImage(ShootImg)
 shoot.scale=0.1
 shoot.velocityX=10
} 

function AileinAttack(){
  if(frameCount % 100 === 0) {
   Ailien=createSprite(1700,500,50,50)
   Ailien.y = Math.round(random(50,windowHeight-100));
   Ailien.addImage(AilienImg)
   Ailien.scale=0.6
   Ailien.velocityX=-5;
   Ailien.lifetime=900

   bullet=createSprite(Ailien.x-20,Ailien.y-20,20,20);
   bullet.addImage(Shoot2Img);
   bullet.velocityX=-7;
   bullet.scale=0.2;
  }
}



