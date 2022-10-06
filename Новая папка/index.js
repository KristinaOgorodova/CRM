'use strict'


const itemName = prompt("Наименование товара", "картина");
const countOfItem = Number(prompt("Количество товара", 2));
const Category = prompt("Категория товара", "украшения");
const price =  Number(prompt("Цена товара", 2500));


console.log(typeof itemName);
console.log(typeof countOfItem);
console.log(typeof Category);
console.log(typeof price);
const fullAmount = countOfItem*price;

console.log(`На складе ${countOfItem} единицы товара "${itemName}" на сумму ${fullAmount} деревянных`);