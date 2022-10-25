'use strict';

(() => {

    const getRandomEvenOrOddNumber = () => {
        let str = '';
        let ran = Math.round(Math.random());
        if (ran  === 0 ) {
            return str = 'even';
        } else {
            return str = 'odd';;
        }
    };

    const game = () => {
        const result = {
            player:5,
            bot:5,
        };
        return function start() {
            const bot = getRandomEvenOrOddNumber();
            let userAnswer = 0;
            userAnswer = prompt('Введите количество шариков от 1 до 5: ');
            console.log(bot);
            console.log(userAnswer);
            if (userAnswer % 2 === 0 || bot === "even") {
                result.bot += userAnswer;
                result.player -= userAnswer;
                alert(`Результат: У Вас:${result.player} , у Бота: ${result.bot}`);
            } else if (userAnswer % 2 !== 0 || bot === "odd") {
                result.bot -= userAnswer;
                result.player += userAnswer;
                alert(`Результат: У Вас:${result.player} , у Бота: ${result.bot}`);
            }
            if (result.bot == 0 && result.player == 0) {
                alert(`Игра окончена!У Вас:${result.player} , у Бота: ${result.bot}`)
                return;
            } else {
                start();
            }
        }
    }
    window.marbl = game;
})();


