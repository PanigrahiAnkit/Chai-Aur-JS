# Maths and Numbers in JavaScript
JavaScript provides a variety of built-in functions and methods for performing mathematical operations and working with numbers. In this guide, we will explore some of the commonly used functions and methods available in the `Math` object and demonstrate their usage with examples.

## Math Object

The `Math` object in JavaScript provides a collection of properties and methods for performing mathematical operations. Here are some of the commonly used functions and methods available in the `Math` object:

1. `Math.abs(x)`: Returns the absolute value of a number `x`.
    Example: 
    ```javascript
    Math.abs(-5)
    ```
    returns `5`.

2. `Math.ceil(x)`: Returns the smallest integer greater than or equal to a number `x`.
    Example: 
    ```javascript
    Math.ceil(4.2)
    ```
    returns `5`.

3. `Math.floor(x)`: Returns the largest integer less than or equal to a number `x`.
    Example: 
    ```javascript
    Math.floor(4.8)
    ```
    returns `4`.

4. `Math.round(x)`: Returns the value of a number rounded to the nearest integer.
    Example: 
    ```javascript
    Math.round(4.5)
    ```
    returns `5`.

5. `Math.max(x1, x2, ..., xn)`: Returns the largest of the given numbers.
    Example: 
    ```javascript
    Math.max(2, 5, 8)
    ```
    returns `8`.

6. `Math.min(x1, x2, ..., xn)`: Returns the smallest of the given numbers.
    Example: 
    ```javascript
    Math.min(2, 5, 8)
    ```
    returns `2`.

7. `Math.random()`: Returns a random number between 0 (inclusive) and 1 (exclusive).
    Example: 
    ```javascript
    Math.random()
    ```
    returns a random number like `0.724567891234`.

8. `Math.pow(x, y)`: Returns the value of `x` raised to the power of `y`.
    Example: 
    ```javascript
    Math.pow(2, 3)
    ```
    returns `8`.

9. `Math.sqrt(x)`: Returns the square root of a number `x`.
    Example: 
    ```javascript
    Math.sqrt(16) //returns "4"
    ```

10. `Math.PI`: Represents the mathematical constant π (pi).

In addition to these functions and properties, you can also use the following methods:

- `Number.toString()`: Converts a number to a string.
    Example: 
    ```javascript
    var num = 5; 
    num.toString() // returns "5"
    ```

- `Number.toFixed(n)`: Formats a number using fixed-point notation with `n` digits after the decimal point.
    Example: 
    ```javascript
    var num = 3.14159; 
    num.toFixed(2) //returns "3.14"
    ```

- `Number.toPrecision(n)`: Formats a number using fixed-point or exponential notation with `n` significant digits.
    Example: 
    ```javascript
    var num = 123.456; 
    num.toPrecision(2) //returns "1.2e+2"
    num.toPrecision(3) //returns "123"
    num.toPrecision(4) //returns "123.5"
    ```

These are just a few examples of the functions, properties, and methods available in the `Math` object. You can explore more functions and methods in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

Remember to use the `Math` object whenever you need to perform mathematical operations or work with numbers in JavaScript.

## Important

Additionally, you can generate a random number within a specific range using the following code:

```javascript
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 15
```

This code snippet generates a random number between `min` and `max`, inclusive. The `Math.random()` function generates a random number between 0 (inclusive) and 1 (exclusive). By multiplying it with the difference between `max` and `min` and adding `min`, we can obtain a random number within the desired range.

