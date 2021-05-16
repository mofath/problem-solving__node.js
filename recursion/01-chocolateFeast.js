// let n = 10, c = 2, m = 5;  // 6
// let n = 12, c = 4, m = 4;  // 3
let n = 6, c = 2, m = 2;   // 5

// n: Bobby's initial amount of money
// c: the cost of a chocolate bar
// m: the number of wrappers he can turn in for a free bar

// using recursion
const chocolateFeast_1 = (n, c, m) => {

    const turnWrappersIntoBars = (wrappers) => {
        const newBars = Math.floor(wrappers / m);
        const newWrappers = newBars + (wrappers % m);
        if (newBars < 1) return;
        totalBars += newBars
        return turnWrappersIntoBars(newWrappers)
    }

    let totalBars = Math.floor(n / c);
    turnWrappersIntoBars(totalBars);
    return totalBars;
}


// using looping
const chocolateFeast_2 = (n, c, m) => {
    let totalBars = n / c;
    let curWrappers = totalBars;

    while (curWrappers >= m) {
        curWrappers++;
        totalBars++;
        curWrappers -= m;
    };

    return totalBars;
}

console.log(chocolateFeast_1(n, c, m));
console.log(chocolateFeast_2(n, c, m));

