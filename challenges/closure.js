// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
It can access the variable internal because it's console.logging it. And its on itnernal and not the Global Scope.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num) {
  let counter = 1;
  return function() {
      for (num; num > 1; num--) {
          counter = counter + num
      }
      return counter;
  }
}

const adding = sumation(4);

console.log(adding());