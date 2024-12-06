function myFunction(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Inputs must be numbers";
  }

  return a + b;
}

console.log(myFunction(5, '5')); // Output: 10
console.log(myFunction(5, 5)); //Output: 10
console.log(myFunction('hello',5)); // Output: Invalid input: Inputs must be numbers