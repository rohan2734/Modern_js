verticals.forEach((row,rowIndex) => {
  row.forEach((open,columnIndex) => {
    if(open){
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex*unitLength + unitLength,
      rowIndex*unitLength + unitLength/2,
      10,
      unitLength,
      {
        isStatic:true
      }
    );
    World.add(world,wall);
  })
}) 

/**
 * here we at the if(open){return} condition, we need to use return, since forEach returns a funciton, so we need to return, 
 * for getting out of that iteration 
 */