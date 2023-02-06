const passengersNum = 30;

const seatsData = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

const Airplane = (function () {
  function sitPassangers(arr, passengersNum) {
    const seats = constructSeats(arr);

    const maxrRowSize = Math.max(...arr.map((e) => e[1]));

    const counter = { val: 0 };

    fillClass("A", seats, counter, maxrRowSize, passengersNum);
    fillClass("W", seats, counter, maxrRowSize, passengersNum);
    fillClass("M", seats, counter, maxrRowSize, passengersNum);

    return seats;
  }

  function fillClass(seatsClass, seats, counter, rowSize, passengersNum) {
    for (let r = 0; r < rowSize; r++) {
      for (let i = 0; i < seats.length; i++) {
        const row = seats[i][r];

        if (row == undefined) continue;

        for (let j = 0; j < row.length; j++) {
          if (row[j] === seatsClass) {
            counter.val++;
            seats[i][r][j] = counter.val;
          }

          if (passengersNum === counter.val) break;
        }
      }
    }
  }

  function constructSeats(arr) {
    return arr.map((block, i) => {
      let temp = [];

      for (let j = 0; j < block[1]; j++) {
        const row = [];

        for (let k = 0; k < block[0]; k++) {
          if (
            (i === 0 && k === 0) ||
            (i === arr.length - 1 && k === block[0] - 1)
          ) {
            row.push("W");
          } else if (k === 0 || k === block[0] - 1) {
            row.push("A");
          } else {
            row.push("M");
          }
        }

        temp.push(row);
      }

      return temp;
    });
  }

  return {
    sitPassangers,
  };
})();

const airplane = Airplane;

console.log(airplane.sitPassangers(seatsData, passengersNum));
