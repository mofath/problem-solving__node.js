const array = [2, 5, 3, 7], target = 5;

// T(n) = O(n2)
// S(n) = O(1)
const twoSum_1 = (arr, target) => {
    let res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                res = [i, j]
            }
        }
    }

    return res;
};


// T(n) = O(n)
// S(n) = O(n)
const twoSum_2 = (arr, target) => {
    let visitedArr = {};

    for (let i = 0; i < arr.length; i++) {
        const comp = target - arr[i];
        if (!(comp in visitedArr)) visitedArr[arr[i]] = i;
        else return [visitedArr[comp], i];
    }
};


// sorting and using two pointer technique
const twoSum_3 = (arr, target) => {

    arr.sort((a, b) => a - b);

    let p1 = 0;
    let p2 = arr.length - 1;

    while (p2 > p1) {
        if (arr[p1] + arr[p2] === target) return [p1, p2];
        else if (arr[p1] + arr[p2] > target) p2--;
        else p1++;
    };
};

console.log(twoSum_1(array, target));
console.log(twoSum_2(array, target));
console.log(twoSum_3(array, target));