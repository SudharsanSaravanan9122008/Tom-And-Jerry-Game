var tomRunningAnim, tomSitting, tomStanding, tom;
var jerryFunnyAnim, jerrySearching, jerryGotCheese, jerry;
var garden, gardenImg;

function preload() {
    //load the images here
    tomSitting = loadAnimation("images/cat1.png");
    tomStanding = loadAnimation("images/cat4.png");
    tomRunningAnim = loadAnimation("images/cat2.png", "images/cat3.png");

    jerryFunnyAnim = loadAnimation("images/mouse3.png");
    jerrySearching = loadAnimation("images/mouse4.png");
    jerryGotCheese = loadAnimation("images/mouse1.png");
    jerrySurrender = loadAnimation("images/mouse2.png")

    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500, 448);
    tom = createSprite(800, 710);
    jerry = createSprite(20, 730);

    garden.scale = 1.2;
    tom.scale = 0.2;
    jerry.scale = 0.1;

    tom.debug = true;
    jerry.debug = true;

    tom.setCollider("rectangle", 0, 0, 75, 50);
    
    garden.addImage(gardenImg);
    tom.addAnimation("Tom", tomStanding);
    jerry.addAnimation("Jerry", jerryFunnyAnim);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if((tom.x - tom.width / 2) - (jerry.x + jerry.width / 2) < 1){
        tom.addAnimation("Tom", tomSitting);
        jerry.addAnimation("Jerry", jerrySurrender);
    }else{
        keyPressed();
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyDown("left")){
        for(var count = 1; count < 3; count++){
            tom.addAnimation("Tom", tomRunningAnim);
            tom.x = tom.x - 10;
        }
    }else if(keyDown("down")){
        tom.addAnimation("Tom",tomSitting);
        jerry.addAnimation("Jerry", jerrySearching)
    }else if(keyDown("up")){
        tom.addAnimation("Tom", tomSitting);
        jerry.addAnimation("Jerry", jerryGotCheese);
    }else{
        tom.addAnimation("Tom", tomStanding);
    }
}
