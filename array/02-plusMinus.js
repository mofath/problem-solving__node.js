const array = [1, 1, 0, -1, -1];

const diagonalDifference = (arr) => {
    const len = arr.length || 0;
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    for (let i = 0; i < len; i++) {
        if(arr[i] > 0) positives ++;
        else if(arr[i] < 0) negatives++;
        else zeros++;
    }

    console.log((positives/len) || 0);
    console.log((negatives/len) || 0);
    console.log((zeros/len) || 0);
};

console.log(diagonalDifference(array));
