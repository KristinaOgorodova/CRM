'use strict';

(() => {

    const getRandomEvenOrOddNumber = () => {
        let str;
        let ran = Math.round(Math.random());
        if (ran  === 0 ) {
            return str = 'even';
        } else {
            return str = 'odd';
        }
    };

    const game = () => {
        const result = {
            player:5,
            bot:5,
        };
        
        return function start() {
            const computer = getRandomEvenOrOddNumber();
            let userAnswer = 0;
            userAnswer = +prompt('Введите количество шариков от 1 до 5: ');
            console.log(computer);
            console.log(userAnswer);
            if (userAnswer > result.player || userAnswer < 0) {
                alert(`Введите другое число`);
                return start();
            } else if (userAnswer === null) {
                return;
            }

            if (userAnswer % 2 === 0 || computer === "even") {
                result.bot = result.bot + userAnswer;
                result.player = result.player - userAnswer;
                alert(`Результат: У Вас:${result.player} , у Бота: ${result.bot}`);
            } else if (userAnswer % 2 !== 0 || computer === "odd") {
                result.bot = result.bot - userAnswer;
                result.player = result.player + userAnswer;
                alert(`Результат: У Вас: ${result.player} , у Бота: ${result.bot}`);
            }

            if (result.bot <= 0) {
                alert(`Вы выиграли!`)
            } else if (result.player <= 0) {
                alert(`Вы проиграли!`)
            } else if (userAnswer == null) {
                alert(`Игра окончена!У Вас:${result.player} , у Бота: ${result.bot}`)
            } else {
                start();
            }
        }
    }
    window.marbl = game;
})();


