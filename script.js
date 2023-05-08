"use strict";

// slice method
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(3));
console.log(arr.slice(2, 3));
console.log(arr.slice(-3, -1));

// splice method
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// reverse method
const arr2 = ["e", "f", "g", "h", "i"];
console.log(arr2.reverse());

// concat method
const letters = arr.concat(arr2);
console.log(letters);

// join method
console.log(letters.join("-"));

// at method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(2));

// looping arrays for each loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-----ForEach------");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// another example of for each loop
const numbers = [20, 10, 30, 12, 5];
numbers.forEach(myFunction);
function myFunction(item, index, arr) {
  console.log((arr[index] = item * 10));
}
// another example of forEach loop

var names = ["jaweria", "laviza", "uswah", "azwa"];
names.forEach(function (value, index) {
  console.log(index + " : " + value);
});
console.log("------refreshments-----");
// another example of forEach loop
var refreshment = ["Pasta", "Juice", "Lays", "kiwi"];
refreshment.forEach(function (items, index) {
  console.log(index + " : " + items);
});

// map
const currencies = new Map([
  ["USD", "United states dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
