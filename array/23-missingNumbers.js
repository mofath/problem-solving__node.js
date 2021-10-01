const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];

const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

function missingNumbers(arr, brr) {
  const brrObj = {};

  for (let i = 0; i < brr.length; i++) {
    const key = brr[i];
    typeof brrObj[key] === 'undefined' ? (brrObj[key] = 1) : brrObj[key]++;
  }

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (brrObj[key] !== 0) brrObj[key]--;
  }

  return Object.keys(brrObj)
    .filter((el) => brrObj[el])
    .map((el) => parseInt(el));
}

console.log(missingNumbers(arr, brr));
