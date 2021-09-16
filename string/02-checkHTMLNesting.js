// const str = '<div><div><b></b></div></div>'; // true
const str = '<div>abc</div><p><em><i>test test test</b></em></p>';
// const str = '<i><div><b></b></div></i>'; // true
// const str = '<p><div><b></b></div></p>'; // true
// const str = '<p><div><b></b></div></p>'; // true
// const str = '<div><div><b></b></div></p>'; // div
// const str = `<div>abc </div><p><em><i>test test test</b></em></p>`; // i
// const str = '<div><div><b></b></div></p>'; // div
// const str = '<p><div></b></a></div></p>'; // b
// const str = '<p><div></p></div>'; // p // failed
// const str = '<div>'; // div // failed
// const str = '<p><p><em></em><p></p><i></p>'; // i // failed

const checkHTMLNesting = (str) => {
  const openingTags = str.match(/<\w+>/g);

  const closingTags = str.match(/<\/\w+>/g);

  const elemObj = {
    '<b>': '</b>',
    '<i>': '</i>',
    '<em>': '</em>',
    '<div>': '</div>',
    '<p>': '</p>',
  };

  let j = Math.min(openingTags.length, closingTags.length);

  while (j > 0) {
    if (elemObj[openingTags[0]] === closingTags[0]) {
      openingTags.shift();
      closingTags.shift();
      j--;
    } else if (
      elemObj[openingTags[0]] === closingTags[closingTags.length - 1]
    ) {
      openingTags.shift();
      closingTags.pop();
      j--;
    } else {
      j = 0;
    }
  }

  if (openingTags.length === 0 && closingTags.length === 0) return true;
  if (openingTags.length === 0) return closingTags[0].replace(/<|>|\//g, '');
  return openingTags[0].replace(/<|>/g, '');
};

console.log(checkHTMLNesting(str));

4;
