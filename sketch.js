var Engine=Matter.Engine;
var ball
var Bodies=Matter.Bodies;
var MWorld=Matter.World;
var MyEngine;
var MyWorld;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  MyEngine= Engine.create();
  MyWorld= MyEngine.world;
  ball = Bodies.circle(100,100,40);
  MWorld.add(MyWorld, ball); 
  var prop={
    isStatic: true 
  }
  ground = Bodies.rectangle(400, 380, 800, 20, prop);
  MWorld.add(MyWorld, ground);
}

function draw() { 
  background(255,255,255); 
  Engine.update(MyEngine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
}