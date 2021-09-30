const m = 6,
  cost = [1, 3, 4, 5, 6];

function icecreamParlor(m, arr) {
  const visited = {};

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const compliment = m - arr[i];

    if (visited.hasOwnProperty(compliment))
      return [visited[compliment] + 1, i + 1];

    visited[curr] = i;
  }
}

console.log(icecreamParlor(m, cost));
