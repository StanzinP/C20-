var mr;
var fr;

function setup() {
  createCanvas(800,400);

  mr = createSprite(400, 200, 50, 100);
  fr = createSprite(400,200,100,50)
}

function draw() {
  background(255,255,255);
  mr.x = mouseX;
  mr.y = mouseY;

  if(mr.x - fr.x <= mr.width/2+fr.width/2 && fr.x - mr.x <= mr.width/2+fr.width/2 && 
     mr.y - fr.y <= mr.height/2+fr.height/2 && fr.y - mr.y <= mr.height/2+fr.height/2)  {
    mr.shapeColor = "blue";
    fr.shapeColor = "blue";
  }
  else
  {mr.shapeColor = "yellow";
   fr.shapeColor = "yellow";
  }
  drawSprites();
}