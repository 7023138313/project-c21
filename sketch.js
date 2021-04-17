var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,600);
 
  thickness=random(22,83)
  weight=random(30,52)
  speed=random(30,52)
  bullet=createSprite(50,200,50,50)
  wall=createSprite(750,200,thickness,height/2);
  wall.shapeColor="red"
 
}

function draw() {
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>100)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color=color(0,255,0);
    }
  }
  bullet.velocityX = speed;
  background("black");  
  drawSprites();
}
function hasCollied(Lbullet,Lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thikness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);

  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
}