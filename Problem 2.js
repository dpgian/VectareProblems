// solution = 4613732

// SOLUTION #1: 

let solution = 0

// These two values will be used to hold the current(fib1) and previous(fib0) value of the Fibonacci sequence
let fib0 = 0
let fib1 = 1

for(let i = 0;; i++) {
  
  // Calculates the next value of the Fibonacci sequence
  let fib = fib0 + fib1
  
  if (fib > 4000000) {
    break;
  }  

  if(fib % 2 === 0) {
    result += fib
  }

  fib0 = fib1
  fib1 = fib
  
}

console.log(solution)



// SOLUTION #2:


let solution = 0

// fib1 holds the current value of the sequence
let fib1 = 1
// fib0 holds the previous value of the sequence
let fib0 = 1

while(fib1 < 4000000) {
  if(fib1 % 2 === 0) {
    result += fib1
  }
  let temp = fib1
  fib1 += fib0
  fib0 = temp
}

console.log(solution)