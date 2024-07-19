// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log('DB CONNECTED');
// }

// chai()

// (function chai() {
// named IIFE
//     console.log('DB CONNECTED');
// })();

// Explanation of IIFE
// 1. Function is created and called at the same time
// 2. It is used to avoid polluting the global scope
// 3. It is used to create private variables
// 4. It is used to avoid naming conflicts
// 5. It is used to create a closure
// 6. It is used to create a module pattern
// 7. It is used to create a self-executing function
// 8. It is used to create a function that runs only once
// 9. It is used to create a function that runs immediately
// 10. It is used to create a function that runs immediately after the declaration

// The first () is used to tell the JavaScript engine that the function is an expression
// The second () is used to call the function
// The function is created and called at the same time

// (() => {
//     console.log('DB CONNECTED');
// })() // This will give error due to the missing semicolon, as the JavaScript engine will think that the function has not ended

((name) => {
    //Un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Ankit");

