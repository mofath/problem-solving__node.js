const array = [9, 10, 3, 10, 23, 5, 10];

const meanMedianMode = (array) => {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array),
    }
};

const getMean = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    return sum / arr.length;
};

const getMedian = (arr) => {
    arr.sort((a, b) => a - b);

    let median = 0;

    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)]
    }
    else {
        let mid1 = arr[(arr.length / 2) - 1];
        let mid2 = arr[arr.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
};

const getMode = (arr) => {
    let modeObj = {};

    arr.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    let modes = [];
    let maxFreq = 0;

    for (var num in modeObj) {
        if (modeObj[num] > maxFreq) {
            modes = [parseInt(num)];
            maxFreq = modeObj[num];
        }
        else if (modeObj[num] === maxFreq) modes.push(parseInt(num));
    }

    if (modes.length === Object.keys(modeObj).length) modes = [];

    return modes;
};

console.log(meanMedianMode(array));