// solution = 906609

let solution = 0;

// Helper function to determine if a number is palindrome

let isPalindrome = num => {
  return num
    .toString()
    .split("")
    .reverse()
    .join("") == num
    ? true
    : false;
};

// Iterates from 999 (biggest three digit number) to 100
for(let i = 999; i > 99; i--) {
  for(let j = 999; j > 99; j--) {
    let product = i*j
    
	// If the product is smaller than a previous found solution we break the iteration 
    if(product < solution) {
      break
    }

    // Checks if the product obtained is palindrome and if it's 
    // larger than any previous found solution(if any)
    // In case it is larger we break the iteration as we would not have any larger product
    if (isPalindrome(product) && product > solution) {
      solution = product
      break
    }


  }
}