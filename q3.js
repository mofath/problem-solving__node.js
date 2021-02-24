/**
 *  Write a simple function (less than 160 character) that returns a boolean
 *  indicates whether or not a string is palindrome
 */

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("level"));
