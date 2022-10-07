'use strict'

const change = (text) => {
  let newText = text.toLowerCase();
  return newText[0].toUpperCase() + newText.slice(1);
}

console.log(change('привет Мир'))