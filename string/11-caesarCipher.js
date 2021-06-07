

const caesarCipher = (str, num) => {
    num %= 26;

    const lowerCaseString = str.toLowerCase();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let newString = '';

    for (let i = 0; i < lowerCaseString.length; i++) {
        const curLetter = lowerCaseString[i];

        if (curLetter === '') {
            newString += curLetter;
            continue;
        }

        const newIdx = alphabet.indexOf(curLetter) + num;

        if (newIdx > 25) newIdx = newIdx - 26;
        if (newIdx < 0) newIdx = 26 + newIdx;

        // check for uppercase 
        if (str[i] === str[i].toUpperCase())
            newString += alphabet[newIdx].toUpperCase();
        else
            newString += alphabet[newIdx];
    }

    return newString;
};

console.log(caesarCipher("bAba", 3));