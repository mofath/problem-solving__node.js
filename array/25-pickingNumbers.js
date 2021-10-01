const a = [1, 2, 2, 3, 1, 2]; // {1, 2, 2, 1, 2}
// const a = [4, 6, 5, 3, 3, 1]; // {4, 3, 3}

function pickingNumbers(a) {
  let arr = Array(a.length).fill(0);
  let max = 0;

  for (let i = 0; i < a.length; i++) {
    const idx = a[i];
    arr[idx]++;
  }

  for (let i = 0; i < a.length; i++) {
    if (arr[i] + arr[i + 1] > max) {
      max = arr[i] + arr[i + 1];
    }
  }

  return max;
}

console.log(pickingNumbers(a));
