const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
var engine,world

var snow3
var snow4
var bg
var snow1=[],snow2=[]

function setup(){
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
 bg=loadImage('snow3.jpg');
}

function draw() {
  if(bg){
    background(bg);
} 
Engine.update(engine);
if (frameCount%30==0){
  snow1.push(new Snow(random(10,760),0,20,20))
  snow2.push(new Snow(random(10,760),0,20,20))
}
for(var i =0;i<snow1.length; i++){
  snow1[i].display()
}
for(var i =0;i<snow2.length; i++){
  snow2[i].display()
}

  drawSprites();
}