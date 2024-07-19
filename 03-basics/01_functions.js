function sayName() {
    console.log('Hello, my name is John');
}

// sayName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    // console.log('Hello'); // unreachable code
}

// addTwoNumbers() // NaN
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, null) // 3

// const result = addTwoNumbers(3, 4); //7
// console.log(result); // undefined

// console.log("Result: ", result);


// function loginUserMessage(username = "Guest") {
//     // if (username === undefined) {
//     //     return "Please provide a username"
//     // }
//     if (!username) {
//         console.log("Please provide a username")
//         return
//     }
//     else {
//         return `${username} just logged in`
//     }
// }

// loginUserMessage("Ankit") //do not print anything
// console.log(loginUserMessage("Ankit")) // Ankit just logged in
// console.log(loginUserMessage()); // undefined just logged in, if nothing is passed, it will be undefined

function calculateCartPrice(...num1)  { // rest operator
    return num1
}
function calculateCartPrice1(val1, val2, ...num1)  { // rest operator should be the last parameter
    return num1
}

// console.log(calculateCartPrice1(10, 20, 30, 40, 50)); // [10, 20, 30, 40, 50] using rest operator

const user = {
    username: "Ankit", 
    // email: "ankit@google.com",
    emails: "ankit@google.com"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and email is ${anyobject.email}`);
}

// handleObject(user); // Username is Ankit and email is undefined, when email is not present in the object

handleObject({
    username: "Ankit", 
    email: "ankit@google.com"
})

const myNewArray = [200, 300, 400, 500, 600, 700, 800, 900, 1000];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); // 300
console.log(returnSecondValue([10, 20, 30, 40])); // 20 

