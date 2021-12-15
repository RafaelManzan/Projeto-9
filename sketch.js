var box;

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = 'lightYellow';
}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightgreen");
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 10;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 10;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 10;
  }
  
  drawSprites();
}



