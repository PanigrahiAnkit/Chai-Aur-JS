# Data Types in JavaScript

JavaScript is a dynamically typed language, which means that variables can hold values of different types. Understanding the different data types in JavaScript is essential for effective programming. In this guide, we will explore the various data types in JavaScript along with examples.

## 1. Primitive Data Types

### 1.1. Number

The `number` data type represents numeric values. It can be an integer or a floating-point number. For example:

```javascript
let age = 25;
let pi = 3.14;
```

### 1.2. String

The `string` data type represents a sequence of characters. It is enclosed in single quotes ('') or double quotes (""). For example:

```javascript
let name = "John Doe";
let message = 'Hello, World!';
```

### 1.3. Boolean

The `boolean` data type represents a logical value, either `true` or `false`. It is commonly used in conditional statements and comparisons. For example:

```javascript
let isStudent = true;
let hasPermission = false;
```

### 1.4. Null

The `null` data type represents the absence of any value. It is often used to indicate the intentional absence of an object value. For example:

```javascript
let car = null;
```

### 1.5. Undefined

The `undefined` data type represents a variable that has been declared but has not been assigned a value. For example:

```javascript
let address;
```

## 2. Complex Data Types

### 2.1. Object

The `object` data type represents a collection of key-value pairs. It can hold various types of data, including other objects, arrays, and functions. For example:

```javascript
let person = {
    name: "John Doe",
    age: 25,
    isStudent: true
};
```

### 2.2. Array

The `array` data type represents an ordered list of values. It can hold multiple values of any type, including other arrays and objects. For example:

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
```

### 2.3. Function

The `function` data type represents a reusable block of code that performs a specific task. It can be defined using the `function` keyword. For example:

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

## Conclusion

Understanding the different data types in JavaScript is crucial for writing effective and bug-free code. By knowing the characteristics and usage of each data type, you can manipulate and process data more efficiently.
