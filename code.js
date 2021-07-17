var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cf5c725a-4fd8-43a0-a143-56c7e3abc4e9","163fddef-1382-4b51-b27b-736582fe7a89","18a80c67-f69d-492b-b336-00ddab76e077","bb63ee41-b20c-4b8f-856f-020e79974e7e","c4025fb5-eff7-455e-97fc-ed9a4e458915","d4f0f42f-13e8-4237-a520-b5d5db621c47","f4b91a91-3422-45e7-889a-6f7ea7c37bb9","e7e71c9b-c4a0-4812-a342-1b86aa7943e9","f9442a3f-259a-4093-b04c-b3e783f3db04","14e251fc-4840-47e4-832f-7a53bff6979b"],"propsByKey":{"cf5c725a-4fd8-43a0-a143-56c7e3abc4e9":{"name":"mario.png_1","sourceUrl":null,"frameSize":{"x":94,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"yaeAd1HaIkPk.GuwMSucK2N9qkdhhT4T","loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":104},"rootRelativePath":"assets/cf5c725a-4fd8-43a0-a143-56c7e3abc4e9.png"},"163fddef-1382-4b51-b27b-736582fe7a89":{"name":"lion2.png_1","sourceUrl":null,"frameSize":{"x":129,"y":122},"frameCount":1,"looping":true,"frameDelay":12,"version":"VGCOt11cJvY0E56sivE2FU0YHPa4GHGL","loadedFromSource":true,"saved":true,"sourceSize":{"x":129,"y":122},"rootRelativePath":"assets/163fddef-1382-4b51-b27b-736582fe7a89.png"},"18a80c67-f69d-492b-b336-00ddab76e077":{"name":"lion1.png_1","sourceUrl":null,"frameSize":{"x":203,"y":177},"frameCount":1,"looping":true,"frameDelay":12,"version":"W9SVv.K_yiiobr5Hn4862tcAyHEk_6JP","loadedFromSource":true,"saved":true,"sourceSize":{"x":203,"y":177},"rootRelativePath":"assets/18a80c67-f69d-492b-b336-00ddab76e077.png"},"bb63ee41-b20c-4b8f-856f-020e79974e7e":{"name":"ground.png_1","sourceUrl":"assets/v3/animations/Co-75LZ-UA_A6BFRSAKpwdtkHIPD6mZPxFt1lKMH9WQ/bb63ee41-b20c-4b8f-856f-020e79974e7e.png","frameSize":{"x":232,"y":22},"frameCount":1,"looping":true,"frameDelay":4,"version":"yC9ZuTrGAjo.lJIqjVSiM0DL5R9R_OPm","loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":22},"rootRelativePath":"assets/v3/animations/Co-75LZ-UA_A6BFRSAKpwdtkHIPD6mZPxFt1lKMH9WQ/bb63ee41-b20c-4b8f-856f-020e79974e7e.png"},"c4025fb5-eff7-455e-97fc-ed9a4e458915":{"name":"cloud","sourceUrl":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png"},"d4f0f42f-13e8-4237-a520-b5d5db621c47":{"name":"sky.png_1","sourceUrl":"assets/v3/animations/Co-75LZ-UA_A6BFRSAKpwdtkHIPD6mZPxFt1lKMH9WQ/d4f0f42f-13e8-4237-a520-b5d5db621c47.png","frameSize":{"x":261,"y":55},"frameCount":1,"looping":true,"frameDelay":4,"version":"G0vyLRRSCaoESr0_vkmMC4nMoRXr.ZaO","loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":55},"rootRelativePath":"assets/v3/animations/Co-75LZ-UA_A6BFRSAKpwdtkHIPD6mZPxFt1lKMH9WQ/d4f0f42f-13e8-4237-a520-b5d5db621c47.png"},"f4b91a91-3422-45e7-889a-6f7ea7c37bb9":{"name":"game over.png_1","sourceUrl":"assets/v3/animations/Co-75LZ-UA_A6BFRSAKpwdtkHIPD6mZPxFt1lKMH9WQ/f4b91a91-3422-45e7-889a-6f7ea7c37bb9.png","frameSize":{"x":731,"y":388},"frameCount":1,"looping":true,"frameDelay":4,"version":"Zx.3XRAERqb.Oh3fIze9aHembqr1fMs_","loadedFromSource":true,"saved":true,"sourceSize":{"x":731,"y":388},"rootRelativePath":"assets/v3/animations/Co-75LZ-UA_A6BFRSAKpwdtkHIPD6mZPxFt1lKMH9WQ/f4b91a91-3422-45e7-889a-6f7ea7c37bb9.png"},"e7e71c9b-c4a0-4812-a342-1b86aa7943e9":{"name":"pahad1.png_1","sourceUrl":null,"frameSize":{"x":71,"y":46},"frameCount":1,"looping":true,"frameDelay":12,"version":"0GPhPW7dtNSx39Wt.zM8XXwGux9Dy0BI","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":46},"rootRelativePath":"assets/e7e71c9b-c4a0-4812-a342-1b86aa7943e9.png"},"f9442a3f-259a-4093-b04c-b3e783f3db04":{"name":"pahad2.png_1","sourceUrl":null,"frameSize":{"x":71,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"04SDoglnU7oLduXVTm5jzMcKqMUKttzt","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":37},"rootRelativePath":"assets/f9442a3f-259a-4093-b04c-b3e783f3db04.png"},"14e251fc-4840-47e4-832f-7a53bff6979b":{"name":"tree","sourceUrl":null,"frameSize":{"x":209,"y":235},"frameCount":1,"looping":true,"frameDelay":12,"version":"w2s6wGM2sHO7.99KhOGl1pEaLrbfscIx","loadedFromSource":true,"saved":true,"sourceSize":{"x":209,"y":235},"rootRelativePath":"assets/14e251fc-4840-47e4-832f-7a53bff6979b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg = createSprite(200,200);
bg.setAnimation("sky.png_1");
bg.scale=10;

var mario = createSprite(50,340);
mario.setAnimation("mario.png_1");
mario.scale=0.5;

var ground1 = createSprite(200,380);
ground1.setAnimation("ground.png_1");
ground1.scale=3;

var ground = createSprite(200,380);
ground.setAnimation("ground.png_1");
ground.scale=3;
ground.x = ground.width /2;
  ground.velocityX = -3;
  
var gameOver = createSprite(200,177);
gameOver.setAnimation("game over.png_1");
gameOver.scale = 0.5;
gameOver.visible = false;


var CloudsGroup = createGroup();
var LionGroup = createGroup();
var PahadGroup = createGroup();
var PaharGroup = createGroup();
var TreeGroup = createGroup();

function draw() {
  
   if(gameState === PLAY){
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& mario.y >= 100) {
    mario.velocityY = -10;
}
  spawnClouds();
  spawnLion();
 spawnPahad();
  spawnPahar();
  spawnTree();
  
  mario.velocityY = mario.velocityY + 0.8;
  
  if(LionGroup.isTouching(mario) || PahadGroup.isTouching(mario) || PaharGroup.isTouching(mario) || TreeGroup.isTouching(mario) ){
    playSound("assets/category_human/character_kimberly_oops_1.mp3")
      gameState = END;
      playSound("assets/category_bell/quriky_trill_bling_positive.mp3")
    }
 
   }
  
  
    
   else if(gameState === END) {
     gameOver.visible = true;
     
     ground.velocityX = 0;
    mario.velocityY = 0;
    LionGroup.setVelocityXEach(0);
    LionGroup.setLifetimeEach(-1);
   
   PahadGroup.setVelocityXEach(0);
   PahadGroup.setLifetimeEach(-1);
   
   PaharGroup.setVelocityXEach(0);
   PaharGroup.setLifetimeEach(-1);
   
   CloudsGroup.setVelocityXEach(0);
   CloudsGroup.setLifetimeEach(-1);
   
   TreeGroup.setVelocityXEach(0);
   TreeGroup.setLifetimeEach(-1);
     
   }
   
   
  
  mario.collide(ground);
  
  if (frameCount % 70 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.setAnimation("cloud");
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.3;
    cloud.velocityX = -3;
    cloud.lifetime = 200;
  }
  
 
    
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,100,40,10);
    cloud.y =  Math.round(random(10,60))
    cloud.setAnimation("cloud");
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    
    CloudsGroup.add(cloud);
  }
  
}

function spawnLion() {
  if(World.frameCount % 100 === 0) {
    var lion = createSprite(400,335,10,40);
    lion.setAnimation("lion1.png_1");
    lion.velocityX = - 8 
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    
  
    //assign scale and lifetime to the obstacle           
    lion.scale = 0.2;
    lion.lifetime = 200;
    //add each obstacle to the group
    LionGroup.add(lion);
  
    
  }
  
}

function spawnPahad() {
  if(World.frameCount % 170 === 0) {
    var pahad = createSprite(400,320,10,40);
    pahad.setAnimation("pahad1.png_1");
    pahad.velocityX = - 8
    
    //generate random obstacles
    var rand = randomNumber(2,6);
    
  
    //assign scale and lifetime to the obstacle           
    pahad.scale = 1.5;
    pahad.lifetime = 200;
    //add each obstacle to the group
    PahadGroup.add(pahad);
  
    
  }
  
}

function spawnPahar() {
  if(World.frameCount % 350 === 0) {
    var pahar = createSprite(400,300,10,40);
    pahar.setAnimation("pahad2.png_1");
    pahar.velocityX = - 8
    
    //generate random obstacles
    var rand = randomNumber(1,3);
    
  
    //assign scale and lifetime to the obstacle           
    pahar.scale = 3;
    pahar.lifetime = 200;
    //add each obstacle to the group
    PaharGroup.add(pahar);
  
    
  }
  
}

function spawnTree() {
  if(World.frameCount % 500 === 0) {
    var tree = createSprite(400,280,10,40);
    tree.setAnimation("tree");
    tree.velocityX = - 8
    
    //generate random obstacles
    var rand = randomNumber(1,2);
    
  
    //assign scale and lifetime to the obstacle           
    tree.scale = 0.6;
    tree.lifetime = 200;
    //add each obstacle to the group
    TreeGroup.add(tree);
  
    
  }
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
