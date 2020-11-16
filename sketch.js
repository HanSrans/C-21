

var bulllet;
var wall,thickkness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500, 300, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickkness=random(22,83);

  wall = createSprite(1200,200,thickkness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background("black"); 

  if(keyDown("space")){
     car.velocityX=speed;

  }
  
  if(wall.x-bullet.x < bulllet.width/2+wall.width/2){

     bullet.velocityX = 0;
  
     var damage = 0.5 * weight * speed * speed/22509;

    if(damage>180){
       bullet.shapeColor = color(255,0,0);
    }

    if(damage<180 && damage > 100){
       bullet.shapeColor = color(230,230,0);
    }

    if(damage<100){
       bullet.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}