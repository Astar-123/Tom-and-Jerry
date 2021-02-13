var forestImage, catImage, cat, runningCatImage, catt, mouseImage, mouse, happyMouseImage, mouses;

function preload() {
    forestImage=loadImage("images/garden.png");
    mouseImage=loadImage("images/mouse1.png");
    catImage=loadImage("images/cat1.png");
    runningCatImage=loadAnimation("images/cat2.png","images/cat3.png");
    happyMouseImage=loadAnimation("images/mouse2.png","images/mouse3.png");
    catt=loadImage("images/cat4.png");
    mouses=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(800,700, 10, 10);
    cat.addImage("sit", catImage);
    cat.scale=0.15;

    mouse=createSprite(200, 700, 10, 10);
    mouse.addImage("stand", mouseImage);
    mouse.scale=0.15;
    //create tom and jerry sprites here

}

function draw() {

    background(forestImage);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2) {
        cat.velocityX=0;
        cat.addImage("standing",catt )
        cat.changeImage("standing", catt);
        mouse.addImage("happy", mouses);
        mouse.changeImage("happy", mouses);
        }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    cat.velocityX=-4;
    cat.addAnimation("run",runningCatImage)
    cat.changeAnimation("run",runningCatImage);
    
    mouse.addAnimation("tease", happyMouseImage);
    mouse.changeAnimation("tease", happyMouseImage);}



  //For moving and changing animation write code here


}
