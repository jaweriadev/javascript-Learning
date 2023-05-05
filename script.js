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
