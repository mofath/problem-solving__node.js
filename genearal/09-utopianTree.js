const n = [0, 1, 2, 3, 4, 5];

function utopianTree(n) {
  const utopian = (k) => {
    let height = 1;

    for (let i = 1; i < k + 1; i++) {
      if (i === 0) height = height;
      else if (i % 2 === 0) height += 1;
      else height = 2 * height;
    }

    return height;
  };

  return n.map((c) => utopian(c));
}

console.log(utopianTree(n));
