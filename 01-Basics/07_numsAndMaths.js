const score = 400
// console.log(score + 1); // 401
// console.log(score - 1); // 399
// console.log(score);

const balance = new Number(400)
// console.log(balance); // Number {400}

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.456
// console.log(otherNumber.toFixed(2)) // 123.46
// console.log(otherNumber.toPrecision(2)) // 1.2e+2
// console.log(otherNumber.toPrecision(3)) // 123
// console.log(otherNumber.toPrecision(4)) // 123.5

//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
// console.log(Math.PI) // 3.141592653589793
// console.log(Math.E) // 2.718281828459045
// console.log(Math.SQRT2) // 1.4142135623730951
// console.log(Math.SQRT1_2) // 0.7071067811865476
// console.log(Math.LN2) // 0.6931471805599453
// console.log(Math.LN10) // 2.302585092994046
// console.log(Math.LOG2E) // 1.4426950408889634
// console.log(Math.LOG10E) // 0.4342944819032518

// console.log(Math)
// console.log(Math.abs(-4)) // 4
// console.log(Math.abs(4)) // 4
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.round(4.5)) // 5
// console.log(Math.round(4.4)) // 4
// console.log(Math.max(1, 2, 3, 4, 5)) // 5
// console.log(Math.min(1, 2, 3, 4, 5)) // 1
// console.log(Math.pow(2, 3)) // 8
// console.log(Math.sqrt(16)) // 4
// console.log(Math.random()) // 0.5
// console.log(Math.random() * 10) // 5.5
// // Math.random() always return a number between 0 and 1
// console.log(Math.floor(Math.random() * 10)) // 5
// console.log((Math.random() * 10) + 1) // 5.5
// console.log(Math.floor((Math.random() * 10) + 1)) // 5 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 15

