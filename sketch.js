var fixedRec;
var movingRec;
function setup() {
  createCanvas(800,400);
  fixedRec= createSprite(400, 200, 50, 50);
  fixedRec.shapeColor="green";
  fixedRec.debug=true;
  movingRec=createSprite(400,200,50,50  )
  movingRec.debug=true;
  movingRec.shapeColor="green";
}

function draw() {
  background("Black");  
  movingRec.x=mouseX;
  movingRec.y=mouseY;
  console.log(movingRec.x-fixedRec.x);
  if(movingRec.x-fixedRec.x<movingRec.width/2+fixedRec.width/2 &&
     fixedRec.x-movingRec.x<movingRec.width/2+fixedRec.width/2 &&
     movingRec.y-fixedRec.y<movingRec.height/2+fixedRec.height/2 &&
     fixedRec.y-movingRec.y<movingRec.height/2+fixedRec.height/2){
     fixedRec.shapeColor="red";
     movingRec.shapeColor="red";
     text (" you have collided",350,100);
  }
  else{
    fixedRec.shapeColor="green";
    movingRec.shapeColor="green"; 
  }

  drawSprites();
}
