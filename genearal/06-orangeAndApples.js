const s = 7, t = 11;
const a = 5, b = 15;
const apples = [-2, 2, 1], oranges = [5, -6];

//  * s: starting point of Sam's house location.
//  * t: ending location of Sam's house location.
//  * a: location of the Apple tree.
//  * b: location of the Orange tree.
//  * apples: distances at which each apple falls from the tree.
//  * oranges: distances at which each orange falls from the tree.

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let ocount = 0;
    let acount = 0;

  
  for (let i = 0; i < apples.length; i++){
    if (a + apples[i] >= s && a + apples[i] <= t){
      acount++;
    } 
  }
  console.log(acount);

   for (let i = 0; i < oranges.length; i++){
    if (b + oranges[i] >= s && b + oranges[i] <= t){
      ocount++;
    } 
  }
 
  console.log(ocount);
}


console.log(countApplesAndOranges(s, t, a, b, apples, oranges));