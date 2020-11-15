const { Engine,Render,Runner,World,Bodies} = Matter;

const engine = Engine.create();//create a new engine
const {world} = engine; //we get access to the world from the engine we created
//world is  a snapshot of all the different shapes ,we have

const render = Render.create({
  element : document.body, //adds a new additional element to body 
  engine: engine, //what engine to use
  options:{
    width: 800, //px units
    height: 600
  } //displays canvas with these height and width
});

//we are going to tell render objects to draw all the objects into the world
Render.run(render);
Runner.run(Runner.create(),engine); //call runner, it coordinates changes from state A to state B

const shape  = Bodies.rectangle(200,200,50,50,{
  isStatic:true //that means we dont want it to move under any circumstances
});
/**
 * if we dont mention the isStatic:true, then it is going to fall down, due to gravity (gravity is enabled)
 * and everytim when we refresh , it starts at the same position
 */
/**
 * the first two numbers are the position , to place this rectangle shape,from the centre of it
 * these are measured from top-left of the canvas , to the entre of the rectangle,
 * the third one is the width, and the fourth one is the height
 */
World.add(world,shape); 
/**
 * we can create as many shapes as possible,
 *  but finally they should be added to the world, to show up
 */

/**
 * to avoid our shapes to fall off completely, 
 * we are going to show rectangles on the corners
 */