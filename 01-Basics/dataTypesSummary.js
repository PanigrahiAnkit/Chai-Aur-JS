// Primitive Data Types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('2588')
const userID = Symbol('2588')

// console.log(id===userID) //false

//Non - primitive data types or reference data types:
// 1. Object
// 2. Array
// 3. Function - Return type is Object Function
// 4. Date
// 5. RegExp
// 6. Map and Set
// 7. WeakMap and WeakSet

/*
const Heroes = ['Ironman', 'Thor', 'Hulk', 'Captain America']

let myObj = {
    name: 'Ironman',
    power: 'Technology'
}

const myFunc = function () {
    console.log('Hello World');
}

console.log(typeof myObj) //object
*/


//Stack (Primitive) and Heap Memory (Non-Primitive)

//Stack Memory

let userName = "Ankit"
let userName1 = userName
userName1 = "Panigrahi"

console.log(userName) //Ankit;
console.log(userName1) //Panigrahi;

//Heap Memory

let marks = {
    english: "98",
    chemistry: "96" 
}

let marks1 = marks

marks1.english = "100"
marks1.chemistry = "100"

console.log(marks);
console.log(marks1);