const array = [2, 4, 5, 7, 8, 20], target = 11;

// using two pointer technique
const twoSumSorted = (arr, target) => {
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p2 > p1) {
        if (arr[p1] + arr[p2] === target) return [p1, p2]
        else if (arr[p1] + arr[p2] > target) p2--;
        else p1++;
    }
};

console.log(twoSumSorted(array, target));