# Scopes in JavaScript
Scopes in JavaScript determine the accessibility and visibility of variables, functions, and objects in your code. Understanding scopes is crucial for writing clean and maintainable code. In JavaScript, there are two main types of scopes: global scope and local scope.

## Global Scope

Variables declared outside of any function or block have global scope. They can be accessed from anywhere in your code.

```javascript
// Global scope variable
let globalVariable = 'I am a global variable';

function printGlobalVariable() {
    console.log(globalVariable); // Accessing global variable
}

printGlobalVariable(); // Output: I am a global variable
```

- In different environments, such as a Windows browser or Node.js, the global scope behaves slightly differently.

- In a Windows browser, the global scope is associated with the `window` object. Variables declared in the global scope are accessible as properties of the `window` object.

- In Node.js, the global scope is associated with the `global` object. Variables declared in the global scope are accessible as properties of the `global` object.

It's important to note that relying too heavily on global variables can lead to potential issues, such as naming conflicts and difficulty in tracking dependencies. It's generally recommended to limit the use of global variables and instead use local or module-level variables whenever possible.

## Local Scope

Variables declared inside a function or block have local scope. They are only accessible within that function or block.

```javascript
function printLocalVariable() {
    let localVariable = 'I am a local variable';
    console.log(localVariable); // Accessing local variable
}

printLocalVariable(); // Output: I am a local variable

console.log(localVariable); // Error: localVariable is not defined
```

## Block Scope

Introduced in ES6, block scope allows variables to be scoped to the nearest enclosing block, such as `if` statements or loops.

```javascript
function printBlockVariable() {
    if (true) {
        let blockVariable = 'I am a block variable';
        console.log(blockVariable); // Accessing block variable
    }

    console.log(blockVariable); // Error: blockVariable is not defined
}

printBlockVariable(); // Output: I am a block variable
```

## Lexical Scope

Lexical scope refers to the ability of a function to access variables from its parent scope. This is determined by the position of the function in the code.

```javascript
function outerFunction() {
    let outerVariable = 'I am an outer variable';

    function innerFunction() {
        console.log(outerVariable); // Accessing outer variable
    }

    innerFunction();
}

outerFunction(); // Output: I am an outer variable
```

## Closure

Closure is a powerful concept in JavaScript that allows functions to retain access to variables from their parent scope even after the parent function has finished executing. This is achieved by creating a reference to the variables in the inner function's lexical environment.

```javascript
function outerFunction() {
    let outerVariable = 'I am an outer variable';

    function innerFunction() {
        console.log(outerVariable); // Accessing outer variable
    }

    return innerFunction;
}

let closureFunction = outerFunction();
closureFunction(); // Output: I am an outer variable
```

## Function Declaration

In JavaScript, functions can be declared using the `function` keyword followed by the function name and a pair of parentheses. Function declarations are hoisted, meaning they can be called before they are defined in the code.

```javascript
function greet() {
    console.log('Hello!');
}

greet(); // Output: Hello!
```

## Function Expression

Function expressions involve assigning a function to a variable. They are not hoisted and can only be called after they have been assigned.

```javascript
let greet = function() {
    console.log('Hello!');
};

greet(); // Output: Hello!
```

Remember, variables declared with `let` and `const` have block scope, while variables declared with `var` have function scope.
