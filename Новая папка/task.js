'use strict'

const rain = Math.round(Math.random());

console.log(rain);

if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else if (rain === 0) {
    console.log('Дождя нет!');
}

const math = Number(prompt('Введите кол-во баллов по математике:', 85));
const russianLang = Number(prompt('Введите кол-во баллов по русскому языку:', 75));
const informatic = Number(prompt('Введите кол-во баллов по информатике:', 95));

if (math + russianLang + informatic >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Баллов не достаточно. Вы не поступили.');
}

const money = Number(prompt('Введите сумму:', 100));

if (money >= 100) {
    console.log(`Готовится к выдачи ${money} рублей`);
} else {
    console.log('Минимальная сумма выдачи 100 руб');
}
