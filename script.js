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
// for each method

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

const weddingDay = "nikkah";

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

// map method
const values = [200, 400, -450, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const valuesUSD = values.map(function (mov) {
//   return mov * eurToUsd;
// });

// arrow map function
const valuesUSD = values.map((mov) => mov * eurToUsd);
console.log(values);
console.log(valuesUSD);

const valuesUSDfor = [];
for (const mov of values) valuesUSDfor.push(mov * eurToUsd);
console.log(valuesUSDfor);

// filter method
let a = [1, 2, 4, 66, 44, 3];
let b = a.filter((c) => {
  return c < 10;
});
console.log(b);
// another example

const withdrawls = [100, -200, 30, -44, -1300];
const answer = withdrawls.filter((ans) => ans < 0);
console.log(answer);
// reduce method

let arr3 = [1, 2, 2, 3, 5, 2];
let arr4 = arr3.reduce((h, h1) => {
  return h + h1;
});
console.log(arr4);

// computing usernames
const user = "Jaweria Abdul Khaliq"; //jak
const username = user
  .toLowerCase()
  .split(" ")
  .map((name) => name[0])
  .join("");
console.log(username);

// find method
var ages = [12, 18, 23, 14, 22];
console.log(ages);

var check = ages.find(adultAge);
console.log(check);

function adultAge(age) {
  return age >= 18;
}

// the syntax of filter is similar to find, but filter returns an array of all matching elements.

// findIndex method
var users = [
  { id: 1, name: "Jaweria" },
  { id: 2, name: "Laveeza" },
  { id: 3, name: " Azwa" },
  { id: 3, name: " Amna" },
  { id: 3, name: " Uswah" },
  { id: 3, name: " Ifra" },
];

var findUser = users.findIndex(userName);
var findUsers = users.find(usersName);
console.log(findUsers);
console.log(findUser);

function userName(users) {
  return users.name == "Laveeza";
}
function usersName(users) {
  return users.id == 2;
}
// some method (true if one value fulfills the condition)
var ages = [12, 13, 15, 19, 18, 20];
console.log(ages);

var g = ages.some(checkAdult);
console.log(g);

function checkAdult(age) {
  return age > 18;
}

// every method (it checks every value)
var ages = [12, 23, 43, 22, 16];
console.log(ages);

var e = ages.every(adultAge);
console.log(e);

function adultAge(age) {
  return age > 16;
}

// flat method
let num = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(num.flat());

let arrDeep = [
  [1, 2, [3, 4]],
  [[5, 6, 7], 8],
];
// if we write 2 in flat(2) than it means we will go 2nd level of nesting
console.log(arrDeep.flat(2));

// flat map method
var arr5 = ["Welcome to", "javascript", "programming language"];
arr5 = arr5.flatMap((el) => {
  return el.split(" ");
});
console.log(arr5);

// sort method
let girls = ["jaweria", "Laviza", "Uswah", "Azwa", "ifra"];
girls.sort();
console.log(girls);

let arr6 = [1, 2, 15];
arr6.sort();

console.log(arr6); // 1, 15, 2
// 2nd example of sort
let compare = (a, b) => {
  return a - b;
};
let numb = [222, 33, 2, 11, 4, 6];
numb.sort(compare);
console.log(numb);

// 3rd example
let compares = (a, b) => {
  return b - a;
};
let numbe = [222, 33, 42, 11, 4, 6];
numbe.sort(compares);
console.log(numbe);

// reverse method
let snacks = ["lays", "kurkure", "crunch", "wavy", "salanty", "juice"];
snacks.reverse();
console.log(snacks);

// 2nd example of reverse method
let counting = [1, 2, 3, 4, 5, 6];
counting.reverse();
console.log(counting);

// splice
let countings = [22, 33, 44, 55, 66, 77, 88];
countings.splice(2, 3, 1029, 1022, 1033);
console.log(countings);

// slice
let countingss = [22, 33, 44, 55, 66, 77, 88];
let newArr = countingss.splice(2, 6);
console.log(newArr);
