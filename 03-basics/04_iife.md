# IIFE (Immediately Invoked Function Expression)

An IIFE is a JavaScript function that is executed immediately after it is defined. It is a way to create a self-contained scope for variables and functions, preventing them from polluting the global scope.

## Syntax

```javascript
(function() {
    // code goes here
})();

// IIFE declaration using arrow function
(() => {
    // code goes here
})();
```

## Example 1: Basic IIFE

```javascript
(function() {
    console.log("This is an IIFE");
})();

// IIFE declaration using arrow function
(() => {
    console.log("This is an IIFE using arrow function");
})();
```

## Example 2: IIFE with Parameters

```javascript
(function(name) {
    console.log("Hello, " + name);
})("John");

// IIFE declaration using arrow function
((name) => {
    console.log("Hello, " + name);
})("John");
```

## Example 3: IIFE with Return Value

```javascript
var result = (function() {
    var x = 10;
    var y = 5;
    return x + y;
})();

console.log(result); // Output: 15
```

## Example4:  IIFE declaration using `arrow` function

```javascript
var result = (() => {
    var x = 10;
    var y = 5;
    return x + y;
})(); //Here semicolon is very important while declaring an IIFE in arrow function as it marks the end of function otherwise it will throw error

console.log(result); // Output: 15
```

## Benefits of using IIFE

- Prevents variable and function name clashes in the global scope.
- Encapsulates code and keeps it private.
- Allows for the creation of modules and libraries.

## Common Use Cases

- Creating private variables and functions.
- Initializing modules or libraries.
- Avoiding global namespace pollution.
- It is used to avoid naming conflicts
- It is used to create a closure
- It is used to create a module pattern
- It is used to create a self-executing function
