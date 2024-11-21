function sum(x = 0) {
  let curr_sum = x; // Initialize the sum with the first value

  function inner(y) {
    if (y === undefined) {
      // If no argument is passed, return the curr_sum
      return curr_sum;
    }
    curr_sum += y; // Otherwise, add the number to the curr_sum
    return inner; // Return the inner function for chaining
  }

  return inner; // Return the inner function for the first time
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(3)(7)());
console.log(sum(10)(20)(30)(40)());
