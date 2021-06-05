const strArr = ["aaey,rrum,tgmn,ball", "all,ball,mur,raeymnl,tall,true,trum",]; // true

const checkInvalidWords = (strArr) => {

  const dictionary = strArr[0].split(",");
  const words = strArr[1].split(",");

  let availableChars = {};

  let notfoundWords = null;

  dictionary.forEach((term) => {
    term.split("").forEach(char => {
      availableChars = { ...availableChars, [char]: char }
    })
  });

  for (let i = 0; i < words.length; i++) {

    let curWordChars = words[i].split("");

    for (let j = 0; j < curWordChars.length; j++) {

      if (!(curWordChars[j] in availableChars)) {
        if (!notfoundWords) notfoundWords = words[i]
        else notfoundWords = notfoundWords + ", " + words[i];
        break;
      }

    }

  }

  return notfoundWords || true
}

console.log(checkInvalidWords(strArr));