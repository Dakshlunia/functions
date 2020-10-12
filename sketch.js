var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);
  movingRect.velocityX=-5;
   movingRect.velocityY=0.5;
  
}
function draw() {
  background(255,255,255);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"; 
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
  object4.shapeColor = "green";



 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 if(isTouching(movingRect,object1)){
  movingRect.shapeColor = "red";
  object1.shapeColor = "red";
 }

 if(isTouching(movingRect,object2)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "red";
 }
 if(isTouching(movingRect,object3)){
  movingRect.shapeColor = "red";
  object3.shapeColor = "red";
 }
 if(isTouching(movingRect,object4)){
  movingRect.shapeColor = "red";
  object4.shapeColor = "red";
 }

bounceOff(movingRect,fixedRect);

  drawSprites();
}
function bounceOff(rect1,rect2){

  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2 &&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
    rect1.velocityX=rect1.velocityX*(-1);
    rect1.velocityY=rect1.velocityY*(-1);
    rect2.velocityX=rect2.velocityX*(-1);
    rect2.velocityY=rect2.velocityY*(-1);
    }  

}

function isTouching(rect1, rect2){
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2 &&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
      return true;
    } else {
      return false;
    }
}