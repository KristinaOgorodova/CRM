'use strict';

const rectangle = {
  width: '5 см',
  height: '5 см',
  get perimeter() {
    const resultPer = 2 * (this.height * this.width);
    return `Периметр: ${resultPer} см.`;
  },
  get square() {
    const resultSq = this.height * this.width;
    return `Площадь: ${resultSq} см.`;
  },
  set newWidth(value) {
    this.width = +value;
  },
  set newHeight(value) {
    this.height = +value;
  },
};

rectangle.newHeight = 10;
rectangle.newWidth = 10;

console.log(rectangle.square);
console.log(rectangle.perimeter);
