// let a = 20
// const b = 10
// var c = 30

// console.log(a, b, c) // 20 10 30
// console.log(a); // 20
// console.log(b); // 10
// console.log(c); // 30

var c = 300 // Global Scope
let a = 200

if (true) { // Block Scope
    let a = 40
    const b = 50
    // var c = 60
    // c = 70
    // console.log("INNER: ", a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
// }

// console.log(a); // 300
// console.log(a); // error or undefined
// console.log(b); // error
// console.log(c); // 60, but it shouldn't be accessible outside the block since it's var it is accessible
// console.log(c);


function one() {
    const username = "ankit"

    function two() {
        const age = "25"
        // console.log(username)
    }
    // console.log(age) //remember ice cream analogy from the video, bade wale ice cream ko chote wale ice cream wale ke pass nahi ja sakte
    // it will throw an error

    two() 
}

one()


if (true) {
    const username = "ankit"
    if (username === "ankit") {
        const age = 25
        // console.log(username + age)
    }
    // console.log(age); // error due to block scope
}

// console.log(username); // error due to block scope

// +++++++++++++++++++ Interesting +++++++++++++++++++++

// Function Declaration
console.log(addOne(5)) // 6

function addOne(num) {
    return num + 1
}


// Function Expression
addTwo(5) // error because it is not hoisted

const addTwo = function(num) {
    return num+2
}
