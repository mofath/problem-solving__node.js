// const str = '4 - 2 = x'; // 2
const str = '1x0 * 12 = 1200'; // 0
// const str = '3x + 12 = 46'; // 4
// const str = '4356 * 23 = 1001x8'; // 8
// const str = '1 + 1111 = x112'; // 1
// const str = '10 - x = 10'; // 0
// const str = '900 / 900 = x'; // 1
// const str = '2004 / 6 = 33x'; // 4

function strEquation(str) {
  const operatorToFunction = {
    '+': (num1, num2) => +num1 + +num2,
    '-': (num1, num2) => +num1 - +num2,
    '*': (num1, num2) => +num1 * +num2,
    '/': (num1, num2) => +num1 / +num2,
  };

  const reverseOperator = {
    '+': '-',
    '-': '+',
    '*': '/',
    '/': '*',
  };

  const findOperator = (term) => {
    const [operator] = term
      .split('')
      .filter((ch) => ['+', '-', '*', '/'].includes(ch));
    return operator;
  };

  const getXterm = (side) => {
    return side.filter((ch) => ch.includes('x'))[0];
  };

  const getSides = (str) => {
    const equationArr = str.split('=');
    let left = equationArr[0];
    const right = equationArr[1];

    if (left.includes('x')) {
      return {
        left: left.split(' ').filter((ch) => ch !== ''),
        right,
      };
    } else {
      return {
        left: right.split(' ').filter((ch) => ch !== ''),
        right: left,
      };
    }
  };

  const evalTerm = (term) => {
    const operator = findOperator(term);
    if (!operator) return term;
    const operandsArr = term.split(operator);
    return operatorToFunction[operator](operandsArr[0], operandsArr[1]);
  };

  let { left, right } = getSides(str);

  right = evalTerm(right);

  if (`${left}`.length === 1) return right;

  const operator = reverseOperator[left[1]];
  const xTerm = getXterm(left);
  const operand = left.indexOf(xTerm) === 0 ? left[2] : left[0];
  right = operatorToFunction[operator](right, operand);
  left = xTerm;

  return `${right}`.split('')[left.split('').indexOf('x')];
}

console.log(strEquation(str));
