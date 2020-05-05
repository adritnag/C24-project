// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var tank,shooter,ground,Cannon;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,800);
engine = Engine.create();
    world = engine.world;

Cannon = new Canon();
World.add(world,Cannon);

tank = new Tanker();
World.add(world,tank);

ground = new Ground();
World.add(world,ground);
    


}

function draw() {
    background(220);
// Remember to update the Matter Engine and set the background.

Engine.update(engine);
Cannon.display();
tank.display();
ground.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
}