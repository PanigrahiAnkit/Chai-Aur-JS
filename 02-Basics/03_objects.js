// when created with constructor function - multiple objects
// Object.create() //Singletone object created using constructor
// when created with class - multiple objects
// when created with object literal - singleton object

// myArray = ["A", "n", "k", "i", "t"];
// myArray[0]; // A

//Object Literals
const mySym = Symbol("key1")


// But in objects we can use key-value pairs, where key is a string and value can be anything.
const jsUser = {
    name: "Ankit",
    "full name": "Ankit Panigrahi",
    // mySym: "mykey1", //This is not actually a symbol it is simply a key named mySym which is a string value
    [mySym]: "mykey1", //This is a symbol key
    age: 22,
    location: "Berhampur",
    email: "ankit@google.com",
    isLoggedIn: false,
    courses: ["JS", "React", "Node", "MongoDB"],
}

// console.log(jsUser.email); // dot notation is used when key is a string with only one word
// // console.log(jsUser.full name); // Error
// console.log(jsUser["email"]); // bracket notation is used when key is a string with multiple words
// console.log(jsUser["full name"]); // Works
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "panigrahi@email.com"
// console.log(jsUser.email);

// Object.freeze(jsUser);
// jsUser.email = "Ankitpanigrahi@gmail.com";
// console.log(jsUser)

jsUser.greeting = function () {
    return("Hello Ankit"); //returns only the name
    // console.log(`Hello ${this.name}`); //returns both the name and undefined due to no return statement
}

jsUser.greetingTwo = function () {
  return `Hello ${this.name}, this is the 2nd function`; 
  };

// console.log(jsUser.greeting); // [Function: greeting] - Function is returned
// jsUser.greeting(); // Hello Ankit

console.log(jsUser.greeting()); // Hello Ankit
console.log(jsUser.greetingTwo()); 