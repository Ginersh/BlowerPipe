const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Body = Matter.Body;

var engine, world;
var ball, blower, blowerMouth, button;


function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(400,200,60,60);
  blower = new Blower(220,350,150,20);
  blowerMouth = new BlowerMouth(360,320,100,90);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.position("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background("GRAY");  
  
  Engine.update(engine);

  ball.show();
  blower.show();
  blowerMouth.show();
  
  drawSprites();
}

function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x: 0, y: 0.05});
}

