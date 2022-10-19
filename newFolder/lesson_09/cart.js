'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },

  add(name, price, count = 1) {
    const obj = {name, price, count};
    cart.items.push(obj);
    this.increaseCount(count);
    this.calculateItemPrice(price, count);
  },
  increaseCount(count) {
    this.count += count;
  },

  calculateItemPrice(price, count) {
    return this.totalPrice += price * count;
  },

  clear() {
    this.totalPrice = 0;
    this.count = 0;
    this.items = [];
  },
  print() {
    console.log(JSON.stringify(cart));
    this.getTotalPrice();
  },
};

cart.add('cup', 100, 5);
cart.add('cup', 300, 2);
cart.add('pancakes', 50, 5);
cart.print();


