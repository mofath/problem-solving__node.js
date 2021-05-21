// const n = 5,
//     k = 3,
//     arr = [4, 2, 6, 1, 10];

const n = 10,
      k = 5,
      arr = [3, 8, 15, 11, 14, 1, 9, 2, 24, 31];


// n: the number of chapters
// k: the maximum number of problems per page
// arr[n]: the number of problems in each chapter


const workbook = (n, k, arr) => {
    let specialProblems = 0;
    let page = 1;

    arr.forEach(problemsPerCh => {

        for(let problem =0; problem< problemsPerCh; problem++){
            problem === page && specialProblems++;
            problem !== problemsPerCh && !(problemsPerCh % k) && page++;
        }
    })

    return specialProblems;
}

console.log(workbook(n, k, arr));
