'use strict'


const itemName = prompt("Наименование товара", "картина");
const countOfItem = Number(prompt("Количество товара", 2));
const category = prompt("Категория товара", "украшения");
const price =  Number(prompt("Цена товара", 2500));


console.log(typeof itemName);
console.log(typeof countOfItem);
console.log(typeof category);
console.log(typeof price);
const fullAmount = countOfItem*price;

console.log(`На складе ${countOfItem} единицы товара "${itemName}" на сумму ${fullAmount} деревянных`);

if (Number.isFinite(countOfItem)) {
    console.log(`На складе ${countOfItem} единицы товара`);
} else {
    console.log("Вы ввели некорректные данные");
}

if (Number.isFinite(price)) {
    console.log(price);
} else {
    console.log("Вы ввели некорректные данные");
}