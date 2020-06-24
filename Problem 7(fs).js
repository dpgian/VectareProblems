// solution = 7273

const fs = require('fs')

// Read a .txt file
fs.readFile('triangle.txt', 'utf8', function (err, data) {
  if (err) throw err;
  solve(data);
});


let solve = ( triangleInput ) => {

  // splits every line/row
  // for each line splits the numbers and convert them to int

  let triangle = triangleInput.split('\n').map(row => row.split(' ').map(number => parseInt(number)))

  //
    for(let i = triangle.length-2; i>0; i--) {
        
      let row = triangle[i-1]

        for(let j = 0; j< row.length; j++){

        let left = row[j] + triangle[i][j]
        let right = row[j] + triangle[i][j+1]
        row[j] = Math.max(left, right)
      }
    }

    solution = triangle[0][0]
    
    console.log(solution)


}

