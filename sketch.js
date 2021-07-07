var bg;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    bg = loadImage("images/garden.png");
    
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,600);
    cat.addAnimation("cat sitting",catImg1);
    cat.scale=0.2

   
    mouse=createSprite(220,600);
    mouse.addAnimation("mouse sitting",mouseImg1);
    mouse.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { cat.velocityX = 0
        cat.addAnimation("lastImagecat",catImg3 )
        cat.changeAnimation("lastImagecat")
        cat.x = 320
        mouse.addAnimation("lastImagemouse",mouseImg3 )
        mouse.changeAnimation("lastImagemouse")


    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
cat.velocityX=-3
cat.addAnimation("cat running", catImg2)
cat.changeAnimation("cat running")
mouse.addAnimation("mouse teasing", mouseImg2)
mouse.changeAnimation("mouse teasing")
 }

}
