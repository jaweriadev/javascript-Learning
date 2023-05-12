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
// example of map
var Juice = 12;
const snackes = ["lays", " salanty", "kurkure", " cottoncandy", "gum"];

const s = snackes.map(myFunction);
console.log(s);
// snackes.map(function (item, index) {
//   console.log("item " + index + " :", item);
// });
function myFunction(item, index) {
  return item + Juice;
}

// if else if statement

const weddingDay = "walima";

if (weddingDay == "nikkah") {
  console.log("I will wear capri shirt");
} else if (weddingDay == "mehndi") {
  console.log("I will wear lhnga");
} else if (weddingDay == "rukhsti") {
  console.log("I will wear grara");
} else if (weddingDay == "walima") {
  console.log("I will wear Maxi");
} else {
  console.log("Function is cancelled");
}
