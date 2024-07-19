const user = {
    username: "Ankit",
    age: 22,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to the world of JavaScript`);
        console.log(this);
        //this keyword is used to access the object properties, also known as object context
    }
}

// user.welcomeMessage()
// user.username = "banu"
// user.welcomeMessage()

// console.log(this); //In node this will be empty object, in browser this will be window object

// +++++++++++++++++++ Arrow Functions +++++++++++++++++++++

// function chai() {
//     let username = "Ankit"
//     // console.log(this.username); //undefined
//     // console.log(this); // {}
// }

// chai()

// const chai = function () {
    // let username = "Ankit"
    // console.log(this.username);
    // console.log(this); // {}
// }

const chai = () => {
    let username = "Ankit"
    console.log(this.username); //undefined
    console.log(this); // {}
}

// chai()

// arrow functions are always anonymous functions
// () => {
    
// }

// const addTwo = (num1, num2) => { //Whenever curly braces are used, we need to use return keyword
//     return num1 + num2 //explicit return
// }

//Implicit return
// const addTwo = (num1, num2) => num1 + num2 //no need to use return keyword

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Ankit"}) //returning object



// addTwo(2, 3)
// console.log(addTwo(2, 3))

const myArray = [1, 2, 3, 4, 5]

// myArray.forEach(()=>{})