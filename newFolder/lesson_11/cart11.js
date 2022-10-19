'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  add(name, price, count = 1) {
    const obj = {name, price, count};
    cart.items.push(obj);
    this.increaseCount(count);
  },
  increaseCount(count) {
    this.count += count;
  },

  get totalPrice() {
    return this.calculateItemPrice(this.items);
  },

  calculateItemPrice(items) {
    let sum = 0;
    for (const b of items) {
      sum += b.price * b.count;
    }
    return sum - (sum / 100 * this.discount);
  },

  clear() {
    this.count = 0;
    this.items = [];
  },
  print() {
    console.log(JSON.stringify(cart));
  },
};

cart.add('cup', 100, 5);
cart.add('cup', 300, 2);
cart.add('pancakes', 50, 5);
cart.print();
console.log(cart.totalPrice);


