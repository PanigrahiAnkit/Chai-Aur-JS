// Array

//Some general info:
// 1. Arrays are a type of object
// 2. Arrays are a collection of items
// 3. Arrays are indexed
// 4. Arrays are ordered

//Naming Conventions:
// (): Parentheses
// []: Brackets
// { }: Braces

const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// console.log(myArray[0]);

const myHeroes = ["Shaktiman", "Nagraj", "Superman", "Batman"];
const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2);
// console.log(myArr2[1]);

//Array Methods
// myArr2.push(6);
// myArr2.push(7);
// myArr2.pop();

// myArr2.unshift(9); //Adds to the beginning of the array
// myArr2.shift(); //Removes from the beginning of the array

// console.log(myArr2.includes(3));
// console.log(myArr2.indexOf(3));

// const newArr = myArr2.join(" "); //Converts the array into a string

// console.log(myArr2);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A ", myArr2);
// const slicedArr = myArr2.slice(1, 3); //Does not modify the original array

// console.log(slicedArr);
// console.log("B ", myArr2);

// const splicedArr = myArr2.splice(1, 3); //Modifies the original array
// console.log("C ", myArr2);
// console.log(splicedArr);

// let originalArray = [1, 2, 3];
// let deepCopy = JSON.parse(JSON.stringify(originalArray));

// deepCopy[0] = 4;

// console.log(originalArray); // Output: [1, 2, 3]
// console.log(deepCopy); // Output: [4, 2, 3]

let originalArray = [1, 2, 3];
let shallowCopy = originalArray.slice();

shallowCopy[0] = 4;

console.log(originalArray); // Output: [1, 2, 3]
console.log(shallowCopy); // Output: [4, 2, 3]