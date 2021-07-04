
var tom , jerry;
var bgImg;



function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png");
    tom1Img = loadImage("images/cat1.png");
    tom2Img = loadAnimation("images/cat2.png","images/cat3.png");
    tom3Img = loadImage("images/cat4.png");
    mouse1Img = loadImage("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img = loadImage("images/mouse4.png");




}

function setup(){
     var canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addImage(tom1Img);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addImage(mouse1Img);
    jerry.scale = 0.15;


    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

      if(tom.x-jerry.x<(tom.width-jerry.width)/2){
       tom.velocityX = 0;
       tom.addImage(tom3Img);
       tom.x = 300;
       tom.scale = 0.2;
       tom.changeImage(tom3Img);

       jerry.addImage(mouse3Img);
       jerry.scale = 0.15;
       jerry.changeImage(mouse3Img);


      }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
  if(keyCode === LEFT_ARROW){

    tom.velocityX = -5;
    tom.addAnimation("tomrunning",tom2Img);
    tom.changeAnimation("tomrunning")
    jerry.addAnimation("jerryrunning",mouse2Img);
    jerry.frameDelay = 25 ;
    jerry.changeAnimation("jerryrunning");
  }

}
