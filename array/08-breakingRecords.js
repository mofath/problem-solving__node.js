const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

const breakingRecords = (scores) =>{
    let breakingMost = 0, breakingLeast = 0;
    let highestRecord = scores[0], lowestRecord = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highestRecord) {
            breakingMost++;
            highestRecord = scores[i];
        }

        if (scores[i] < lowestRecord) {
            breakingLeast++;
            lowestRecord = scores[i];
        }
    }

    return [breakingMost, breakingLeast]
}


console.log(breakingRecords(scores));
