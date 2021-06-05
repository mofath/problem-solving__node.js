const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

const migratoryBirds = (arr) => {
    let birdsId = {};

    arr.forEach(id => {
        if (birdsId[id]) birdsId = { ...birdsId, [`${id}`]: birdsId[id] + 1 }
        else birdsId[id] = 1;
    });

    return Object.keys(birdsId).reduce((prev, cur) => birdsId[cur] > birdsId[prev] ? cur : prev, 1);
}

console.log(migratoryBirds(arr));