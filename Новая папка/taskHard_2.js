'use strict'

const sum = Number(prompt('Введите сумму:' , 10000));


if (sum <= 15000) {
    let res = sum/100*13;
    console.log(res);
} else if (sum > 15000 && sum < 50000) {
    let rest = sum - 15000;
        if (rest < 50000 ) {
            let res = rest / 100 * 20;
            console.log(res);
        }
} else if (sum >= 50000) {
    let rest = sum - 50000
    let res = rest/100*30;
    console.log(res);
}

