// const arr = [3, 5, [1, 1, 4, 1, 1], 4, [2, 0, 0, 0], 4, [0, 0, 2, 0]];
const arr = [2, 3, [1, 2, 3], 4, [1, 2, 3, 3]];

function balancedSums(arr) {
  let sum = arr.reduce((acc, val) => acc + val);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (sum === leftSum) return 'YES';

    leftSum += arr[i];
  }
  return 'NO';
}

function main(arr) {
  let testArr = [];

  for (let i = 1; i < arr.length; i += 2) {
    testArr = arr[i + 1];

    console.log('----------');
    console.log(balancedSums(testArr));
  }
}

console.log(main(arr));
