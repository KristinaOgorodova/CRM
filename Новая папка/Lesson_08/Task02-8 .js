'use strict'

const rendomNumbers = (num, n, m) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * (m - n)) + n)
    }
    return arr;
}

console.log(rendomNumbers(5, 10, 50));