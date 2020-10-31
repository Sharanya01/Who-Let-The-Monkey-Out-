var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score = 0;
var ground;
var gameState = 10 ; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,600);
  monkey = createSprite(100,580,10,10);
monkey.addAnimation("run",  monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(300,600,600,20);
 obstaclesGroup = new Group();
  FoodGroup= new Group();
  
}


function draw() {
     background("lightblue");
  
  if( gameState ===10 ){
   
    if(keyDown("space")&& monkey.y>550) {
        monkey.velocityY = -12;
      
    }  
    text("SCORE: "+ score, 500,50);
    if (FoodGroup.isTouching(monkey)){
  
  score = score+3;
  
  FoodGroup.destroyEach();
}

if(obstaclesGroup.isTouching(monkey)){
  
  gameState = 11;

  text("GAME OVER",270,300)
  
  FoodGroup.destroyEach();
  obstaclesGroup.destroyEach();
  
   obstacle.velocityX = 0;
   
 banana.velocityX =  0;
  
}
  }
   
 
    //console.log(monkey.y);
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.3
   //monkey.velocityY = monkey.velocityY +0.8;
  //  
   spawnObstacles();
  monkey.collide(ground);
  spawnBanana();
drawSprites();
   // monkey.velocityY = monkey.VelocityY =  0.1;
}


function spawnObstacles(){
 if (frameCount % 90 === 0){
   var obstacle = createSprite(600,572,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6
   
  obstaclesGroup.add(obstacle);
 obstacle.scale = 0.1;
   
 }
}

function spawnBanana(){
 if (frameCount % 100 === 0){
   
  banana = createSprite(600,100,10,40);
    banana.y = Math.round(random(330, 450));
  banana.addImage(bananaImage);
   banana.lifetime = 1000;
   banana.scale = 0.1;
   banana.velocityX = -7.5;
   FoodGroup.add(banana);
 }  
}


 


