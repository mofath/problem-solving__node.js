const b = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

// const b = 5;
// const keyboards = [4];
// const drives = [5];

function getMoneySpent(keyboards, drives, b) {
  const comp = [];

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const price = keyboards[i] + drives[j];
      if (price <= b) {
        comp.push(price);
      }
    }
  }

  if (comp.length === 0) return -1;

  return comp.reduce((prev, cur) => (prev > cur ? prev : cur), 0);
}

console.log(getMoneySpent(keyboards, drives, b));
