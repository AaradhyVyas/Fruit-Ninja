 
var PLAY = 1;
  var END = 0;
  var gameState = 1;

  var sword, enemy, fruit, fruitGroup, enemyGroup;
var swordImage,monsterImage, fruit1, fruit2, fruit3, fruit4, gameoverImage;

var score;

  function preload () {
    swordImage = loadImage("sword.png");
    monsterImage = loadAnimation("alien1.png","alien2.png");
    fruit1 = loadImage("fruit1.png");
    fruit2 = loadImage("fruit2.png");
    fruit3 = loadImage("fruit3.png");
    fruit4 = loadImage("fruit4.png");
    gameoverImage = loadImage("gameover.png");
    
    sound1 = loadSound("knifeSwooshSound.mp3");
    sound2 = loadSound("gameover.mp3");
    
}

function setup() {
  
  createCanvas(600,600);
   
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.5;
  
  sword.setCollider("rectangle",0,0,40,40);
  
  score = 0;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
}

  function draw() {
    background("lightblue")
    
    text("SCORE : "+score,200,50);
   
    
    if (gameState === PLAY) {
      fruits();
      Enemy();
      
      sword.x=World.mouseX;
    sword.y=World.mouseY
      
    }
    
    if (fruitGroup.isTouching(sword)){
      score = score+2;
      fruitGroup.destroyEach();
    }
    
    if (sword.isTouching(enemyGroup)){
      gameState=END;
      sword.velocityX=0;
      sword.velocityY=0;
      
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      
      gameover = createSprite(300,150);
  gameover.addImage(gameoverImage);
      gameover.scale=2;
      sword.destroy();
    }
    
    
    drawSprites();
    
  }

   function fruits(){
     if (World.frameCount%80===0) {
         fruit=createSprite(400,200,20,20);
         fruit.scale=0.2;
         //fruit.debug=true;
         r=Math.round(random(1,4));
           if (r == 1) {
           fruit.addImage(fruit1);
           } else if (r == 2) {
             fruit.addImage(fruit2);
           } else if (r == 3) {
             fruit.addImage(fruit3)
           } else {
             fruit.addImage(fruit4);
           }

         fruit.y=Math.round(random(50,340));

         fruit.velocityX=-7
        fruit.setLifetime=100;

        fruitGroup.add(fruit);
     }
     }

  function Enemy(){
    if (World.frameCount%200===0){
      monster = createSprite(400,200,20,20);
      monster.addAnimation("moving",monsterImage);
      monster.y=Math.round(random(100,300));
      monster.velocityX=-8
      monster.setLifetime=50;
      
      enemyGroup.add(monster);
    }
    
  }












