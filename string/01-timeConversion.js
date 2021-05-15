const timeString = "12:05:45PM";

const timeConversion = (str) => {
    let hour = str.slice(0, 2) * 1;
    let time = str.slice(2, 8);

    if (str.indexOf("PM") !== -1) {
        if (hour === 12) return (hour + time);
        return (12 + hour + time);
    } else {
        if (hour < 10) return ("0" + hour + time);
        if (hour === 12) return ('00' + time)
        return (hour + time);
    }
};

console.log(timeConversion(timeString));


