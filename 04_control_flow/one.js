// if statement

//Syntax
// if (condition) {
    
// }

// if (true) {
//     console.log('if statement');
// }

// if (false) {
//     console.log('if statement');
// }

const isUSerLoggedIn = true;

if (isUSerLoggedIn) {
    
}

// Comparison Operators
// 1. ==  - value (equal)
// 2. === - value and type (Strict Equality)
// 3. !=  - value (not equal)
// 4. !== - value and type
// 5. >   - greater than
// 6. <   - less than
// 7. >=  - greater than or equal to
// 8. <=  - less than or equal to
// 9. &&  - and
// 10. ||  - or
// 11. !   - not
// 12. =  - assignment

// if (2 == "2")
// {
//     console.log("executed")
// }

// if(temperature > 30) {
//     console.log('It is hot outside');
// }

// if(temperature < 30) {
//     console.log('It is cold outside');
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     // var power = "fly" // hoisting
//     console.log((`User Power : ${power}`));
// }
// console.log((`User Power : ${power}`)); // ReferenceError: power is not defined


const balance = 1000

// if (balance > 1000) console.log('You have a good balance'); // single line statement, no need of curly braces, implicit return

// if (balance < 500) {
//     console.log('You have a low balance');
// } else if (balance < 1000) {
//     console.log('You have a good balance');
// } else {
//     console.log('You have a great balance');
// }

if(userLoggedIn && balance > 1000) {
    console.log('You have a good balance');
} else {
    console.log('You have a low balance');
}