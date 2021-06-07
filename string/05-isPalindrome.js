const str = "Madam I'm Adam";

const isPalindrome = (str) => {
    str = str.toLowerCase();

    const charactersArr = str.split('');

    const validCharacters = 'abcdefghigklmnopqrstuvwxyz'.split('');

    const targetArr = []

    charactersArr.forEach((char) => {
        if (validCharacters.indexOf(char) > -1) targetArr.push(char)
    });


    if (targetArr.join('') === targetArr.reverse().join('')) return true
    else return false;

}

console.log(isPalindrome(str));