// const str = 'abcababcababcab'; //abcab
// const str = 'tttttttrtttttttrtttttttrtttttttr'; // tttttttrtttttttr
// const str = 'aaaaaaaaaa'; // aaaaa
// const str = 'gg'; // g
// const str = 'abcxabc'; // -1
const str = 'x'; // -1

function repeatedSubstring(str) {
  const isRepeating = (sub, str) => {
    if (str.length > sub.length) {
      const currSub = str.substring(0, sub.length);
      const remaining = str.substring(sub.length, str.length);
      return currSub === sub && isRepeating(sub, remaining);
    }
    return str === sub;
  };

  let m = [];
  let x = [];
  const len = str.length;

  if (str.length <= 1) return -1;

  for (let i = 1; i <= Math.sqrt(len); i++) {
    if (len % i == 0) {
      if (len / i == i) m.push(i);
      else {
        m.push(i);
        x.unshift(len / i);
      }
    }
  }

  m = [...x, ...m];

  for (let i = 0; i < m.length; i++) {
    const sub = str.slice(0, m[i]);

    if (isRepeating(sub, str)) return sub;
  }

  return -1;
}

console.log(MathChallenge(str));

function MathChallenge(str) {
  const isRepeating = (sub, str) => {
    if (str.length > sub.length) {
      const currSub = str.substring(0, sub.length);
      const remaining = str.substring(sub.length, str.length);
      return currSub === sub && isRepeating(sub, remaining);
    }
    return str === sub;
  };

  let m = [];
  let x = [];
  const len = str.length;

  if (str.length <= 1) return -1;

  for (let i = 1; i <= Math.sqrt(len); i++) {
    if (len % i == 0) {
      if (len / i == i) m.push(i);
      else {
        m.push(i);
        x.unshift(len / i);
      }
    }
  }

  m = [...x, ...m];

  for (let i = 0; i < m.length; i++) {
    const sub = str.slice(0, m[i]);

    if (isRepeating(sub, str)) return sub;
  }

  return -1;
}

console.log(MathChallenge(str));
