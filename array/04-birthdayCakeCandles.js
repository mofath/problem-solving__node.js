let array = [4, 4, 1, 2];

const birthdayCakeCandles = (arr) => {
    let max = arr[0];
    let maxOccurance = 0;

    arr.forEach(item => {
        if (item > max) {
            max = item;
            maxOccurance = 1;
        } else if (item === max) {
            maxOccurance++;
        }
    });

    return maxOccurance;
}

console.log(birthdayCakeCandles(array));