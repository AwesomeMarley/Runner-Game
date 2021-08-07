var RunnerImg;
var PathImg1;

var Path1;
var Runner1;

var boundry1;
var boundry2;

function preload(){
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  PathImg1 = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  Path1 = createSprite(200,200,400,400);
  Path1.addImage("Loading",PathImg1);
  Path1.velocityY = 2;
  Path1.scale = 1.3;

  Runner1 = createSprite(200,250,10,10);
  Runner1.addAnimation("Loading",RunnerImg);
  Runner1.scale = 0.08;

  Boundry1 = createSprite(10,200,10,400);
  Boundry2 = createSprite(390,200,10,400);
  Boundry1.visible=false;
  Boundry2.visible=false;

}

function draw() {
  background(0);

  Runner1.x = mouseX

  if(Path1.y > 400){
    Path1.y = height/2;
  }

  Runner1.collide(Boundry1);
  Runner1.collide(Boundry2);

  drawSprites();
}
