function fibonacci(num) {
  let a = 0;
  let b = 1;
  let sum;
  for(let i = 1; i < num; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
