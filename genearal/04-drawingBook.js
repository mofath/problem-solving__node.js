
const n = 6, p = 2; // 1
// const n= 5, p = 4; // 0

// n the number of pages in the book.
// p pages to turn to.

const pageCount = (n, p) => {
    const turns = Math.floor(p / 2);
    const totalBookTurns = Math.floor(n / 2);

    if (n / 2 < p) {
        // move backward
        return totalBookTurns - turns;
    } else {
        // move forwardeE
        return turns;
    }
}

console.log(pageCount(n, p));