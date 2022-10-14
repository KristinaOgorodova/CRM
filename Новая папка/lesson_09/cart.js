'use strict'

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.items.reduce((sum,price) => sum + this.items[price]);
    },
    add(n, p, qty) {
        if (qty === undefined) qty = 1;

        const obj = {
            name: n,
            price: p,
            amount: qty,
        };
        this.items.push(obj);
        this.increaseCount(qty);
        this.calculateItemPrice(p);
    },
    increaseCount(n) {
       return this.count += n;
    },
    calculateItemPrice (num) {
        return this.count * num ;
    },
    clear() {
        for (const prop of Object.getOwnPropertyNames(cart)) {
            delete cart[prop];
        }
    },
    print() {
        const str =JSON.stringify(cart);
        console.log(str);
        console.log(this.totalPrice);
    },
};

cart.add('cup', 300, 2);

cart.add('cup', 300, 2);
cart.getTotalPrice();
cart.print();


