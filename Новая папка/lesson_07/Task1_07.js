'use strict'

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const filter = (arr,arr2) => {
    return arr.filter(i => !arr2.includes(i));
}

console.log(filter(allStudents,failedStudents));