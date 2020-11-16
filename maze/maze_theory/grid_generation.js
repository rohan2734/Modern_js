const grid = [];

for(let i=0;i<3;i++){
  grid.push([]);
  for(let j=0;j<3;j++){
    grid[i].push(false);
  }
}
console.log(grid);

const grid1 = Array(3).fill(null)
  .map(() => Array(3).fill(false));

  /**
   * you might have a doubt that why didnt we do,
   * const grid = Array(3).fill([false,false,false])
   * well , in that case, if you would change one element in the inner array,
   * it would effect each row in that, because it is the same array memory
   */