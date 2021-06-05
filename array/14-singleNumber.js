const array = [3, 3, 4, 4, 5, 1, 1];

// T(n) = O(n2)
// S(n) = O(n)
const singleNumbr_1 = (arr) => {
    let uniqueVals = [];

    arr.forEach(num => {
        if (uniqueVals.includes(num)) uniqueVals.splice(uniqueVals.indexOf(num), 1);
        else uniqueVals.push(num)
    });

    return uniqueVals[0];
};


// T(n) = O(n)
// S(n) = O(n)
const singleNumbr_2 = (arr) => {
    let uniqueVals = [];

    arr.forEach(num => {
        if (uniqueVals[num]) uniqueVals = { ...uniqueVals, [`${num}`]: uniqueVals[num] + 1 };
        else uniqueVals[num] = 1;
    });

    return Object.keys(uniqueVals).reduce((curr, prev) => uniqueVals[curr] === 1 ? curr : prev, 1);
};


// T(n) = O(n)
// S(n) = O(1)
const singleNumbr_3 = (arr) => {
    let x = 0;

    arr.forEach(num => x ^= num);

    return x;
}


console.log(singleNumbr_1(array));
console.log(singleNumbr_2(array));
console.log(singleNumbr_3(array));
