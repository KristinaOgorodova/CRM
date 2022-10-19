'use strict'

const rendomNumbers = (num, n, m, str) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        
        let ran = (Math.floor(Math.random() * (m - n)) + n);
        if (str === 'even') {
            if (ran % 2 === 0 ) {
                arr.push(ran);
            } 
        }
        if (str === 'odd') {
            if (ran % 2 !== 0) {
                arr.push(ran);
            }
        }
    }
    return arr;
}



console.log(rendomNumbers(5, 10, 50, 'odd'));