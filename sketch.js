var wall,thickness;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
 speed=random(320,500)
thickness=(83);
weight=random(30,52);
bullet=createSprite(50,200,50,50);
 wall=createSprite(1200,200,thickness,height/2);
bullet.velocityX=speed;
 
}

function draw() {
  background(0);


 if (hasCollided(bullet,wall)){

bullet.velocityX=0;
bullet.x=wall.x-65;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if (damage>7) {
wall.shapeColor=color(255,0,0);
}

 if (damage<7){
wall.shapeColor=color(0,255,0);
} 
  
}
  drawSprites();

      }

      function hasCollided(lbullet,lwall) {
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;

if (bulletRightEdge>=wallLeftEdge)
{

  return true

}
return false;
      }

