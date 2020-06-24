// solution = 137846528820

let solution = 0

let gridSize = 20

// Creates a virtual grid that surrounds/encapsulate the real grid. 
// Each point of this virtual grid is an intersection/point of the real grid. 
// Considering that each point has 1 direction where it can move we count from the bottom 
// how many possible path we have and add it to the next intesection

let grid = new Array(gridSize+1)
grid.fill(new Array(gridSize+1).fill(1))

for(let i=gridSize-1; i>-1; i--) {
	for(let j=gridSize-1; j>-1; j--){
		grid[i][j] = grid[i+1][j] + grid[i][j+1]
	}
}

solution = grid[0][0]

console.log(solution)
