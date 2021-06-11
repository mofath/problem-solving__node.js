const sentence = 'this is a string of words';

const reverseWords = (sentence) => {
    const wordsArr = sentence.split(' ');

    const reversedSentenseArr = [];

    wordsArr.forEach(word => {
        let reverseWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }

        reversedSentenseArr.push(reverseWord)
    })

    return reversedSentenseArr.join(" ")
};

console.log(reverseWords(sentence));