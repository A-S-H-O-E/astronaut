var bathI;
var brushI;
var drinkI;
var eatI;
var gymI;
var moveI;
var sleepI;
var astronaut;
function preload() {
  bathI = loadAnimation("images/bath1.png", "images/bath2.png");
  brushI = loadAnimation("images/brush.png");
  drinkI = loadAnimation("images/drink1.png", "images/drink2.png");
  eatI = loadAnimation("images/eat1.png", "images/eat2.png");
  gymI = loadAnimation(
    "images/gym1.png",
    "images/gym2.png",
    "images/gym11.png",
    "images/gym12.png"
  );
  moveI = loadAnimation("images/move.png");
  sleepI = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(800, 800);
  astronaut = createSprite(400, 400, 25, 25);
  astronaut.addAnimation("sleep", sleepI);
  astronaut.scale = 0.09;
}

function draw() {
  background("lightblue");
  if (keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("gym", gymI);
    astronaut.changeAnimation("gym");
  }
  if (keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("eat", eatI);
    astronaut.changeAnimation("eat");
  }
  if (keyDown(UP_ARROW)) {
    astronaut.addAnimation("bath", bathI);
    astronaut.changeAnimation("bath");
  }
  if (keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("drink", drinkI);
    astronaut.changeAnimation("drink");
  }
  if (keyDown("B")) {
    astronaut.addAnimation("brush", brushI);
    astronaut.changeAnimation("brush");
  }
  if (keyDown("M")){
    astronaut.addAnimation("move",moveI)
    astronaut.changeAnimation("move")
    }
  drawSprites();
}
