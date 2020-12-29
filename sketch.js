var backgroundImg;
var rectangle;
var box;
var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7,sprite8,sprite9,sprite10,sprite11,sprite12,sprite13,sprite14,sprite15,sprite16;
var cheetahheadImg, cheetahbodyImg, cheetahlegsImg, cheetahtailImg, dogbodyImg,doglegsImg,dogheadImg, giraffebodyImg, giraffeheadImg,giraffelegs;
var lionlegsImg, lionbodyImg,liontail, lionheadImg, peacockheadImg, elephanttailImg;
var answer1, answer2, answer3, answer4;
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/crumpled bg.jpg");
    cheetahheadImg = loadImage("sprites/cheetah head.PNG");
    cheetahbodyImg = loadImage("sprites/cheetahbody.PNG");
    cheetahlegsImg= loadImage("sprites/cheetahlegs.PNG");
    cheetahtailImg= loadImage("sprites/cheetahtail.PNG");
    dogbodyImg = loadImage("sprites/dogbody.PNG");
    dogheadImg = loadImage("sprites/doghead.PNG");
    doglegsImg = loadImage("sprites/doglegs.PNG");
    giraffebodyImg = loadImage("sprites/giraffebody.jpg");
    giraffeheadImg = loadImage("sprites/giraffehead.jpg");
    giraffelegsImg = loadImage("sprites/giraffelegs.jpg");
    lionbodyImg = loadImage("sprites/lionbody.PNG");
    lionheadImg = loadImage("sprites/lionhead.PNG");
    lionlegsImg = loadImage("sprites/lionlegs.PNG");
    liontailImg = loadImage("sprites/liontail.PNG");
    peacockheadImg = loadImage("sprites/peacockhead.PNG");
    elephanttailImg = loadImage("sprites/elephanttail.PNG");
}
function setup(){
    var canvas = createCanvas(1200, 600);
    //top left corner of rectangle is at 110, 205.
    rectangle = createSprite(400, 400, 580, 370);
    //top left corner of box is at 820, 20.
    box = createSprite(1000, 180, 360, 320);
    answer1 = createSprite(182.5, 390, 145, 370);
    answer1.shapeColor = "green";
    answer2 = createSprite(400, 297.5, 290, 185);
    answer2.shapeColor = "blue";
    answer3 = createSprite(400, 482.5,290, 185);
    answer3.shapeColor = "pink";
    //add 145 and 290 and add 145/2
    answer4 = createSprite(617.5, 390,145, 370);
    answer4.shapeColor = "orange";
    //width of 2 sprites is 145 and center ones are 290
    sprite1 = createSprite(865, 60, 90, 80);
    sprite1.shapeColor = "blue";
    sprite1.addImage(cheetahheadImg);
    sprite1.scale = 0.74;
    sprite2 = createSprite(955, 60, 90 , 80);
    sprite2.shapeColor = "purple";
    sprite2.addImage(lionbodyImg);
    sprite2.scale = 0.45;
    sprite3 = createSprite(1045, 60, 90, 80);
    sprite3.shapeColor = "green";
    sprite3.addImage(peacockheadImg);
    sprite3.scale = 0.5;
    sprite4 = createSprite(1135, 60, 90, 80);
    sprite4.shapeColor = "pink";
    sprite4.addImage(doglegsImg);
    sprite4.scale = 0.4;
    sprite5 = createSprite(865, 140, 90, 80);
    sprite5.shapeColor = "pink";
    sprite5.addImage(giraffeheadImg);
    sprite5.scale = 0.33;
    sprite6 = createSprite(955, 140, 90, 80);
    sprite6.shapeColor = "green";
    sprite6.addImage(liontailImg);
    sprite6.scale = 0.5;
    sprite7 = createSprite(1045, 140, 90 , 80);
    sprite7.shapeColor = "blue";
    sprite7.addImage(dogheadImg);
    sprite7.scale = 0.9;
    sprite8 = createSprite(1135, 140, 90, 80);
    sprite8.shapeColor = "purple";
    sprite8.addImage(cheetahbodyImg);
    sprite8.scale = 0.38;
    sprite9 = createSprite(865, 220, 90, 80);
    sprite9.shapeColor = "blue";
    sprite9.addImage(giraffelegsImg);
    sprite9.scale = 0.75;
    sprite10 = createSprite(955, 220, 90 , 80);
    sprite10.shapeColor = "purple";
    sprite10.addImage(dogbodyImg);
    sprite10.scale = 0.4;
    sprite11 = createSprite(1045, 220, 90, 80);
    sprite11.shapeColor = "green";
    sprite11.addImage(lionbodyImg);
    sprite11.scale = 0.45;
    sprite12 = createSprite(1135, 220, 90, 80);
    sprite12.shapeColor = "pink";
    sprite12.addImage(elephanttailImg);
    sprite12.scale = 0.4;
    sprite13 = createSprite(865, 300, 90, 80);
    sprite13.shapeColor = "pink";
    sprite13.addImage(cheetahlegsImg);
    sprite13.scale = 0.35;
    sprite14 = createSprite(955, 300, 90, 80);
    sprite14.shapeColor = "green";
    sprite14.addImage(lionheadImg);
    sprite14.scale = 0.45;
    sprite15 = createSprite(1045, 300, 90 , 80);
    sprite15.shapeColor = "blue";
    sprite15.addImage(giraffebodyImg);
    sprite15.scale = 0.7;
    sprite16 = createSprite(1135, 300, 90, 80);
    sprite16.shapeColor = "purple";
    sprite16.addImage(lionlegsImg);
    sprite16.scale = 0.3;
    
}
function draw(){
    background(backgroundImg);
    textSize(15);
    fill("black");
    text("Arrange an animal by using the lion's head, giraffe's body, and the cheetah's legs, and the elephant's tail. ", 110, 100);
    if(mousePressedOver(sprite1)){
        sprite1.x = mouseX;
        sprite1.y = mouseY;
    }
    console.log(sprite1.x, sprite1.y);
    if(sprite14.x>= 110 && sprite14.x<= 255){
        score = score+1;
    }
    drawSprites();
}
