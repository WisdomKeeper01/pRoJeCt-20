var car, wall,speed, weight, deforamtion

function setup() {
  createCanvas(1200,400);
  speed = Math.round(random(55,90))
  weight = Math.round(random(400,1500))
  car = createSprite(100,200,75,20)
  car.shapeColor = "green"
  wall = createSprite(1150,200,20,400)
  car.velocityX = speed
}

function draw(){
  background(0);
  textSize(20)
  stroke("red")
  strokeWeight(4)  
  text("speed:"+speed,100,350)
  text("weight:"+weight,200,350)
  deforamtion = Math.round(0.5*weight*speed*speed/22509)
  text("THAT DAMAGE:"+deforamtion,300,350)
  if(wall.x-car.x<=(car.width+car.width)/2){
    car.velocityX = 0
    if(deforamtion>180){
      car.shapeColor = "red"
    }
    else if(deforamtion<180&&deforamtion>100){
      car.shapeColor="yellow"
  }
  else{
    car.shapeColor = "green"
  }
  
} 
  drawSprites();
  }