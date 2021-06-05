const magazineText = 'this all the magazine text is about in the magazine';
const noteText = 'is this magazine is is is is is'; // false

const harmlessRansomMagazine = (noteText, magazineText) => {
    const noteArr = noteText.split(" ");
    const magazineArr = magazineText.split(" ");
    const magazineObj = {}

    magazineArr.forEach((word) => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++
    })

    let notIsPossible = true;

    noteArr.forEach((word, i) => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                notIsPossible = false;
                return;
            }
        }
        else {
            notIsPossible = false;
            return;
        }
        console.log(i);
    })

    return notIsPossible;
}

console.log(harmlessRansomMagazine(noteText, magazineText));