// const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]],
//     n = 8,
//     width = [2, 3, 1, 2, 3, 2, 3, 3]
//[ 1, 2, 3, 2, 1];


const cases = [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]],
    n = 5,
    width = [1, 2, 2, 2, 1]
// [2, 1, 1, 1, 2]

console.log(width.slice(2, 3));


const serviceLane = (n, cases, width) => {
    return cases.map((segment) => {
        const seg = width.slice(segment[0], segment[1] +1);
        return Math.min.apply(Math, seg)
    })
};

console.log(serviceLane(n, cases, width));