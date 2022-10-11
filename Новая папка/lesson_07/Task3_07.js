'use strict'

const addPrefix = (arr) => {
    let namesWithPrefix = arr.map(item => {
        return `Mr ${item}`;
    })
    return namesWithPrefix;
};

const names = ['Noah', 'Liam', 'Mason', 'Jacob' , 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names));

