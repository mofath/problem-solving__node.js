const x1 = 0, v1 = 2, x2 = 5, v2 = 3; // No
// const x1 = 0, v1 = 3, x2 = 4, v2 = 2; // Yes
// const x1 = 2, v1 = 1, x2 = 1, v2 = 2; // Yes


// x1, v1: starting position and jump distance for kangaroo 1
// x2, v2: starting position and jump distance for kangaroo 2


const kangaroo_1 = (x1, v1, x2, v2) => {
    const n = (x1 - x2) / (v2 - v1);
    return (n - Math.floor(n)) !== 0 || n < 0 ? "NO" : "YES";
}


const kangaroo_2 = (x1, v1, x2, v2) => {
    // If v1<v2, kangaroo 1 will never reach the position of kangaroo 2.
    if ((v1 > v2) && (x2 - x1) % (v2 - v1) == 0) return "YES";
    else return "NO";
}

console.log(kangaroo_1(x1, v1, x2, v2));
console.log(kangaroo_2(x1, v1, x2, v2));