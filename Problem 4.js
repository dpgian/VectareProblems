// solution = 232792560

// Since all numbers need to be divided by 20 we will start 
// an infinite loop from 20, incrementing by 20 each time

let solution = 20;

// Helper function to determine if a number passed in as argument
// is divisible from numbers ranging 1-20

let divisible = num => {
  for (let i = 2; i < 21; i++) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}

while (true) {
  if (divisible(solution)) {
    console.log(solution);
    break;
  }
  solution += 20;
}
