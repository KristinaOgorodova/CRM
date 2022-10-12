'use strict'

const years = (s, e) => {
    let leapYears = []
    for (let y = s; y <= e; y++) {
        if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        leapYears.push(y);
        }
    }
    return leapYears;
};


console.log(years(1990, 2010));