'use strict'

const bar = (arr) => {
    let result = arr.reduce((sum, elem) => {
        return sum + elem;
    });

    if (result >= 50) {
        return;
    } else {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        arr.push(randomNum);
        bar();
    }
    return arr;
};

console.log(bar([1,2,3]));

