const a = [17, 28, 30], b = [99, 16, 8]; // [2, 1]



const compareTriplets = (a, b) => {
    
    let aCount = 0, bCount = 0

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) aCount++
        if (a[i] < b[i]) bCount++
    }

    return [aCount, bCount];
}


console.log(compareTriplets(a, b));