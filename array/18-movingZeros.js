const array = [1, 0, 9, 0, 8];

// T(n) = O(n)
// S(n) = O(n)
const movingZeros_1 = (arr) => {
    let zCount = 0;
    let nonZeroArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zCount++;
        else nonZeroArr.push(arr[i])
    }

    for (let i = 0; i < zCount; i++)  nonZeroArr.push(0)

    return nonZeroArr;
}


// slow and fast pointer
// T(n) = O(n)
// S(n) = O(1)
const movingZeros_2 = (arr) => {
    let slow = 0;

    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== 0) {
            swap(arr, slow, fast)
            slow++;
        }
    }

    return arr;
}

console.log(movingZeros_1(array));
console.log(movingZeros_2(array));