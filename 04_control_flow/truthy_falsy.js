// const userEmail = "Ankit@google.com" // true
// const userEmail = "" // false
const userEmail = [] // false

// if (userEmail) {
//     console.log("Email is valid")
// }
// else {
//     console.log("Email is not valid")
// }

if (userEmail.length === 0) {
  console.log("Array is Empty");
} else {
  console.log("Array is not Empty");
}

/*
falsy values:
1. false
2. 0
3. ""
4. null
5. undefined
6. NaN
7. -0
8. +0
9. 0n
*/

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) {
  console.log("Object is Empty");
} else {    
  console.log("Object is not Empty");
}

//Nullish Coalescing Operator (??): It is used to check if the value is null or undefined.

let val1;
// val1 = val1 ?? "Default Value";
// val1 = 5 ?? 10
// console.log(val1); // Default Value

// val2 = null ?? 10
// console.log(val2); // 10

// val3 = undefined ?? 10
// console.log(val3); // 10

// val4 = null ?? 10 ?? 20
// console.log(val4); // 10

// Ternaary Operator
// condition ? exprIfTrue : exprIfFalse

const iceTeaPrice = 100;

iceTeaPrice >=80 ? console.log("I will buy Ice Tea") : console.log("I will not buy Ice Tea");