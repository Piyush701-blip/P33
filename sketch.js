const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var turnCount = 5;
var gameState, start, end;

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) 
  {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j=j+50) 
  {
   plinkos.push(new Plinko(j,75));
  }
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
   plinkos.push(new Plinko(j,175));
  }
  
  for (var j = 75; j <=width; j=j+50) 
  {
   plinkos.push(new Plinko(j,275));
  }
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
   plinkos.push(new Plinko(j,375));
  }

  start = 1;
  end = 2;
  
  gameState = start;

  Engine.run(engine);
}
 


function draw() 
{
  background("black");
  textSize(20)
  text("Score : " +  score,20,30);
  text("Turns : " + turnCount,700, 30)

  text("50", 25, 550);
  text("100", 105, 550);
  text("150", 185, 550);
  text("200", 265, 550);
  text("250", 345, 550);
  text("300", 425, 550);
  text("350", 505, 550);
  text("400", 585, 550);
  text("450", 665, 550);
  text("500", 745, 550);
  
  Engine.update(engine);
 
  if(gameState === start)
  {
  for (var i = 0; i < plinkos.length; i++) 
   {
    plinkos[i].display();
   }
 
  for (var k = 0; k < divisions.length; k++) 
  {
   divisions[k].display();
  }

  if(particle != null)
  {
   particle.display();

   if(particle.body.position.y >= 780)
   {
    if(particle.body.position.x > 0  && particle.body.position.x < 80)   
    {
      score = score + 50;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 80 && particle.body.position.x < 160)
    {
      score = score + 100;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 160 && particle.body.position.x < 240)
    {
      score = score + 150;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 240 && particle.body.position.x < 320)
    {
      score = score + 200;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 320 && particle.body.position.x < 400)
    {
      score = score + 250;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 400 && particle.body.position.x < 480)
    {
      score = score + 300;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 480 && particle.body.position.x < 560)
    {
      score = score + 350;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 560 && particle.body.position.x < 640)
    {
      score = score + 400;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 640 && particle.body.position.x < 720)
    {
      score = score + 450;
      World.remove(world, particle.body);
      particle = null;
    }
    else if(particle.body.position.x > 720 && particle.body.position.x < 800)
    {
      score = score + 500;
      World.remove(world, particle.body);
      particle = null;
    }
   }
  }

  if(turnCount <= 0)
  {
    gameState = end;
  }
 }

 if(gameState === end)
 {
  for (var i = 0; i < plinkos.length; i++) 
   {
    plinkos[i].display();
   }
 
  for (var k = 0; k < divisions.length; k++) 
  {
   divisions[k].display();
  }

  textSize(50);
  text("GameOver", 270, 250);
 }
}

function mousePressed()
{
  if(gameState !== "end" && turnCount >= 1)
  {
    particle = new Particle(random(width/2-30, width/2+30), 10,10);
    turnCount--;
  }
}