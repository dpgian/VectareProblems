// solution = 104743

let solution = 0;

// Helper function to determine is a number is prime

let isPrime = (num) => {
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num%i == 0) {
      return false
    }
  }
  return true
}

// Counter for prime numbers found
// We loop through the numbers and stop once we hit the 10001th prime
let primeCount = 0

for(let i=2; primeCount<10001; i++) {

  if(isPrime(i)) {
    primeCount += 1
  
	if(primeCount===10001){
		solution = i
	}
    }

}

console.log(solution)