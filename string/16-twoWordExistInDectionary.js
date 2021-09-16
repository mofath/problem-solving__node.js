const strArr = ['baseball', 'a,all,b,ball,bas,base,cat,code,d,e,quit,z']; // base,ball
// const strArr = ['abcgefd', 'a,ab,abc,abcg,b,c,dog,e,efd,zzzz']; // abcg,efd

function twoWordExistInDectionary(strArr) {
  const charArr = strArr[0];
  const dect = strArr[1];

  for (let i = 1; i <= charArr.length; i++) {
    const left = charArr.substring(0, i);
    const right = charArr.substring(i, charArr.length);

    if (dect.includes(left) && dect.includes(right)) {
      return `${left}, ${right}`;
    }
  }

  return 'not possible';
}

console.log(twoWordExistInDectionary(strArr));
