var wall,thickness;
var bullet,speed,weight;

thickness=random(22,83);

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 600, 600);
  wall=createSprite(1200,200,hight/2);
  wall=colour(80,80,80);
  weight=random(30,52);
  speed=random(223,321);
}

function draw() {
  background(255,255,255);  
  car=createSprite(150,30,50,50);
  car.shapeColor="white"
  wall=creatSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);
  car.velocityX=speed;
  if(wall.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
    car.shapeColor(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.sapeColor=colour(0,255,0);
  }
}

function hascollided (Lbullet,Lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
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
  var damage=0.5 * weight *speed*speed/(thickness*thickness*thickness);
}

{
  if (damage>10)
{

}
{
  if(damage<10)
{

{
  wall.ShapeColor=color(0,225.0);
}
  drawSprites();
}