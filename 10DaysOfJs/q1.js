/**
 * Write a sum method which will work properly when invoked using either syntax below.
 * explain what is a closure in JavaScript
 */

function sum(num1, num2) {
  if (!num2) {
    return function (anyNum) {
      return num1 + anyNum;
    };
  } else return num1 + num2;
}

console.log(sum(2, 3));
console.log(sum(2)(3));
