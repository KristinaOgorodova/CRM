'use strict';

(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
      const result = {
          player: 0,
          computer: 0,
      };

      return function start () {
          let computer = getRandomIntInclusive(1,15);
          if (computer <= 5){
              computer = 'камень';
          }else if (computer <= 10){
              computer = 'ножницы';
          }else {
              computer = 'бумага';
          }
          console.log(computer);
          let userAnswer = ' ';
          userAnswer = prompt('Напишите Ваш ответ: камень, ножницы, бумага').toLowerCase();
          if (userAnswer === computer) {
              alert('Ничья!');
          } else if (userAnswer === 'камень') {
              if (computer === 'бумага') {
                  computer ++;
                  alert(`Результат: ${player}: ${computer}`);
              }
          }
      }
  }
  window.rps = game;
})();

