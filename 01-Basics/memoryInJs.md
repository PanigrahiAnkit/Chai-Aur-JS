# Memory in JavaScript

## Overview

In JavaScript, memory is divided into two main areas: the stack and the heap. This documentation provides an overview of these memory areas and their usage in JavaScript.

## The Stack

The stack is used for storing primitive data types and function calls. It follows a Last-In-First-Out (LIFO) structure. When a function is called, a new frame is added to the stack, and when a function returns, its frame is removed from the stack. This allows for efficient memory management and helps prevent stack overflow errors.

### Example
In JavaScript, memory is divided into two main areas: the stack and the heap.

The stack is used for storing primitive data types and function calls. It follows a Last-In-First-Out (LIFO) structure. When a function is called, a new frame is added to the stack, and when a function returns, its frame is removed from the stack. This allows for efficient memory management and helps prevent stack overflow errors.

**Example:**
```javascript
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate() {
    const x = add(2, 3);
    const y = multiply(4, 5);
    return x + y;
}

console.log(calculate()); // Output: 23
```

## The heap

The heap, on the other hand, is used for storing complex objects like arrays and objects. It is an area of memory where objects are dynamically allocated and deallocated. The garbage collector in JavaScript automatically frees up memory that is no longer in use.

**Example:**
```javascript
const person = {
    name: "John",
    age: 25,
    hobbies: ["reading", "coding", "gaming"]
};

const numbers = [1, 2, 3, 4, 5];

// Accessing heap memory
console.log(person.name); // Output: John
console.log(numbers[2]); // Output: 3
```

Understanding the difference between stack and heap memory in JavaScript is important for efficient memory management and optimizing performance.