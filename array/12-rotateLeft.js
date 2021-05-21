const array = [1, 2, 3, 4, 5]; //5 1 2 3 4
const n = 4;

// using destruction
// terminate due timeout
const rotLeft_1 = (arr, n) => {
    let rotatedArr = [...arr];

    for (let i = 0; i < n; i++) {
        const [first, ...rest] = rotatedArr;
        rotatedArr = [...rest, first];
    };

    return rotatedArr;
};


// using built-in functions `push` and `shift`;
const rotLeft_2 = (arr, n) => {
    let rotatedAr = [...arr];

    for (let i = 0; i < n; i++) {
        rotatedAr.push(rotatedAr.shift());
    };

    return rotatedAr;
};


// using map
const rotLeft_3 = (arr, n) => {
    return arr.map((_, index) => arr[(index + n) % arr.length]);
};


console.log(rotLeft_1(array, n));
console.log(rotLeft_2(array, n));
console.log(rotLeft_3(array, n));