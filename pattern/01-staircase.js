const staircase1 = (n) => {
    let stars = "";
    let spaces = "";
    for (let i = 0; i < n; i++) {
        stars = "";
        spaces = "";
        for (let k = i; k < n - 1; k++) {
            spaces += " ";
        }
        for (let j = 0; j <= i; j++) {
            stars += "#";
        }
        spaces += stars;
        console.log(spaces);
    }
}


const staircase2 =(n) => {
    let filledArray = new Array(n).fill(' ');
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        n--;
    }
}

console.log(staircase1(4));
console.log(staircase2(4));