// solution = 233168

let solution = 0

// Loop starts with 3, being the lowest acceptable multiple

for (let i = 3; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result += i
  }
}

console.log(solution)
