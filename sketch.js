var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleIMG
var rleaf,red_leafIMG
var oleaf,orange_leafIMG

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage("apple.png")
  orange_leafIMG = loadImage("orangeLeaf.png")
  red_leafIMG = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var r = Math.round(random(1,3))
  if(frameCount% 70 ==0){
    if(r == 1){
      spawn_apples()
    }
    else if (r === 2){
      spawn_red_Leaf()
    }
    else{
      spawn_orange_Leaf()
    }
  }
  drawSprites();
}

function spawn_apples(){
apple = createSprite(random(50,350),30,10,10)
apple.velocityY = 3
apple.addImage("apple1",appleIMG)
apple.scale = 0.08
apple.lifetime  = 150
apple.depth = rabbit.depth
rabbit.depth += 1 
}

function spawn_red_Leaf(){
  rleaf = createSprite(random(50,350),30,10,10)
  rleaf.velocityY = 3
  console.log("hi")
  rleaf.addImage("1",red_leafIMG)
  rleaf.scale = 0.08
  rleaf.lifetime  = 150
  rleaf.depth = rabbit.depth
  rabbit.depth += 1 
}
 
function spawn_orange_Leaf(){
  oleaf = createSprite(random(50,350),30,10,10)
  oleaf.velocityY = 3
  oleaf.addImage("2",orange_leafIMG)
  oleaf.scale = 0.08
  oleaf.lifetime  = 150
  oleaf.depth = rabbit.depth
  rabbit.depth += 1 
}