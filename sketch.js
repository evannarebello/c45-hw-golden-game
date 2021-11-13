var background,bgImg;
var runner,runner_running_left,runner_running_right
var platform,platformImg
var laser,laserImg

function preload(){
 bgImg = loadImage("assets/bg.png")
 runner_running_right = loadAnimation("assets/chr1.png","assets/chr2.png","assets/chr3.png","assets/chr4.png")
 platformImg = loadImage("assets/platform.png")

 laserImg = loadImage("assets/laser2.png")
}

function setup(){
 createCanvas(800,500)

 background = createSprite(300,300,)
 background.addImage("bg",bgImg)
 background.scale = 0.6

 runner = createSprite(80,300,60,60)
 runner.addAnimation("runningRight",runner_running_right)
 runner.scale = 0.4

 platform = createSprite(80,350,60,60)
 platform.addImage("platform",platformImg)
 platform.scale = 0.6
 
 /*laser = createSprite(400,250,60,60)
 laser.addImage("laser",laserImg)
 laser.scale = 0.1*/
 


 


}
function draw(){


  
  /*if (background.x < 0){
    background.x = background.width/2;
  }*/

  
  
  
  

  drawSprites();
  
 
}
