// const str = "<div><div><b></b></div></div>" // true
// const str = "<i><div><b></b></div></i>"; // true
// const str = "<div><div><b></b></div></p>" // div
// const str = `<div>abc </div><p><em><i>test test test</b></em></p>`; // i
// const str = "<div><div><b></b></div></p>" // div
// const str = "<p><div><b></b></div></p>"   // true
const str = "<p><div>  </p></div>"            // p // failed
// const str = "<p><div></b></a></div></p>" // b //failed
// const str = "<p><div><b></b></div></p>"   // true


const checkHTMLNesting = (str) => {

    const openingTags = str.match(/<\w+>/g);

    const closingTags = str.match(/<\/\w+>/g);

    const elemObj = {
        "<b>": "</b>",
        "<i>": "</i>",
        "<em>": "</em>",
        "<div>": "</div>",
        "<p>": "</p>",
    };

    let i = 0;
    let j = openingTags.length - 1;

    while (j > 0) {

        if (elemObj[openingTags[i]] === closingTags[i]) {
            openingTags.shift();
            closingTags.shift();
            j--;
        }

        else if (elemObj[openingTags[i]] === closingTags[j]) {
            openingTags.shift();
            closingTags.pop();
            j--;
        }

        else {
            j = 0;
        }
    }

    return (elemObj[openingTags[i]] === closingTags[i]) ? true : openingTags[i].replace(/<|>/g, '');
}

console.log(checkHTMLNesting(str));




