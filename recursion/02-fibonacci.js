const n = 6;

// using recursive
const fibonacci_1 = (n) => {

    // handle base case
    if (n <= 2) return 1;

    return fibonacci_1(n - 1) + fibonacci_1(n - 2);
}


// using iterative way
const fibonacci_2 = (n) => {
    let prev = 0, cur = 1, acc = 0;

    for (let i = 1; i < n; i++) {
        acc = prev + cur;
        prev = cur;
        cur = acc;
    }

    return acc;
}

console.log(fibonacci_1(n));
console.log(fibonacci_2(n));