const { Engine,Render,Runner,World,Bodies} = Matter;

const engine = Engine.create();
const {world} = engine; 

const cells=3;
const width=600;
const height=600;

const render = Render.create({
  element : document.body, 
  engine: engine, 
  options:{
    wireframes:true,
    width, //width:width,
    height
  } 
});


Render.run(render);
Runner.run(Runner.create(),engine); 


/* shapes */
//walls

const walls = [
  Bodies.rectangle(width/2,0,width,40,{isStatic:true}),
  Bodies.rectangle(width/2,height,width,40,{isStatic:true}),
  Bodies.rectangle(0,height/2,40,height,{isStatic:true}),
  Bodies.rectangle(width,height/2,40,height,{isStatic:true})
];

World.add(world,walls); 


//Maze generation

//for shuffling neighbours
const shuffle = (arr) => {
  let counter = arr.length;

  while(counter>0){
    const index = Math.floor(Math.random()*counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  
  return arr;
}

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells-1).fill(false));

const horizontals = Array(cells-1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow  = Math.floor(Math.random()*cells);
const startCol  = Math.floor(Math.random()*cells);

const stepThroughCell = (row,column) => {
  //If I have visited the cell at [row,column] , then return
  if(grid[row][column]){
    return;
  }

  //Mark the cell as visited
  grid[row][column] = true;
  
  //Assemble randomly ordered neighbours
  const neighbours = shuffle([
    //[row-1,column,"up"], //up
    //[row,column+1,"right"], //right
   [row+1,column,"down"], //down
    //[row,column-1,"left"] //left
  ]); 


  //For Each neighbour...
  for(let neighbour of neighbours){
    //See If that Neighbour is out of bounds
    const [nextRow,nextColumn,direction] = neighbour;

    
    if(nextRow<0 || nextRow >= cells || nextColumn<0 || nextColumn>=cells){
      continue; //dont leave this loops, but skip this iteration
    }

    //If we have visited that neighbour , continue to next neighbour
    if(grid[nextRow][nextColumn]){
      continue;
    }

    //Remove a  wall from either horizontals or verticals
    if(direction === "left"){
      verticals[row][column-1] = true;
    }else if(direction === "right"){
      verticals[row][column] = true;
    }else if(direction === "up"){
      horizontals[row-1][column] = true;
    }else if(direction === "down"){
      horizontals[row][column] = true;
    }
  }
  //visit that next cell (call the stepThroughCellAgain)
};

stepThroughCell(startRow,startCol);
// console.log(grid);