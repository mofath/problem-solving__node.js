// let i = 20,
//   j = 23,
//   k = 6;

let i = 13,
  j = 45,
  k = 3;

function beautifulDays(i, j, k) {
  let count = 0;

  const reverse = function (number) {
    let reversed = 0;

    while (number != 0) {
      reversed *= 10;
      reversed += number % 10;
      number -= number % 10;
      number /= 10;
    }

    return reversed;
  };

  const isWholeNum = (num) => num % 1 === 0;

  for (let m = i; m <= j; m++) {
    let temp = Math.abs(m - reverse(m)) / k;
    if (isWholeNum(temp)) count++;
  }

  return count;
}

console.log(beautifulDays(i, j, k));
