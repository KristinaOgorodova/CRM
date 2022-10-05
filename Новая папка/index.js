'use strict'

const item = "картина";
const itemCount = 2;
const itemCategory = "украшения";
const itemPrice = 2500;

console.log("Наименование:", item);
console.log(itemCount*itemPrice);

const itemName = prompt("Наименование товара");
const count = prompt("Количество товара");
const countOfItem = Number(count);
const Category = prompt("Категория товара");
const num =  prompt("Цена товара");
const price = Number(num);

console.log(typeof itemName);
console.log(typeof countOfItem);
console.log(typeof Category);
console.log(typeof price);
const fullAmount = countOfItem*price;

console.log(`На складе ${countOfItem} единицы товара "${itemName}" на сумму ${fullAmount} деревянных`);