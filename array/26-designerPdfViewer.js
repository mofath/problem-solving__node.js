const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];

const word = 'zaba';

function designerPdfViewer(h, word) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const wordObj = {};

  for (var i = 0; i < word.length; i++) {
    if (typeof wordObj[word[i]] === 'undefined')
      wordObj[word[i]] = h[alphabet[word[i]] - 1];
  }

  const width = word.length;

  const heighest = Object.values(wordObj).reduce((prev, cur, i) => {
    return prev > cur ? prev : cur;
  }, 0);

  return width * heighest;
}

console.log(designerPdfViewer(h, word));
