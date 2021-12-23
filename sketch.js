var score=0
var BackgroundImage,astronaut,Ailein,Earth;
var Fuel,Goldcoin,Life;
var Asteriod,Reset1,Reset2,Shoot;
var Blast;
var life=3
var gameState=1

function preload() {
  BackgroundImg=loadImage("assets/background.jpg")
  AstronautImg=loadImage("assets/spaceship.png")
  Ailien=loadImage("assets/ailein.png")
  EarthImg=loadImage("assets/earth.png")
  Fuel=loadImage("assets/fuel.png")
  Goldcoin=loadImage("assets/goldcoin.png")
  Life=loadImage("assets/life.png")
  Asteriod=loadImage("assets/asteroid.png")
  Reset1=loadImage("assets/reset1.png")
  Reset2=loadImage("assets/reset2.png")
  Shoot=loadImage("assets/shoot.png")
  Blast=loadImage("assets/blast.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  //Background=createSprite(10,90,100,100);
  //Background.addImage(BackgroundImg)

  astronaut=createSprite(300,300,50,50);
  astronaut.addImage(AstronautImg)

  Earth=createSprite(100,100,50,50)
  Earth.addImage(EarthImg)
  Earth.scale=1.5

}

function draw(){
background(BackgroundImg);



if(keyDown(UP_ARROW)){
  astronaut.y=astronaut.y-10
}
drawSprites();
}




