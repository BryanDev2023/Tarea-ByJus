let bow , arrow,  scene;
let bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
let select_balloon=1
let score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
    background(0);
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    bow.y = World.mouseY 
    if (keyDown("space")) {
      createArrow();

    }
    select_balloon = Math.round(random(1,4));
   if (World.frameCount % 100 == 0) {
            switch(select_balloon){
              case 1: redBalloon();
              case 2: blueBalloon();
              case 3: pinkBalloon();
              case 4: greenBalloon();
              default: break;
            }

            switch(select_balloon ){
              case 1: redBalloon();
              break;
              case 2:blueBalloon();
              break;
              case 3:pinkBalloon();
              break;
              case 4:greenBalloon();
              break;
              default:break;
            }

          switch(select_balloon ){
            case 1: redBalloon();
            break;
            case 1:blueBalloon();
            break;
            case 1:pinkBalloon();
            break;
            case 1:greenBalloon();
            break;
            default:break;
          }
}
  drawSprites();
}

 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}
