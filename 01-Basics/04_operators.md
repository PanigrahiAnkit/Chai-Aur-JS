# Operators in JavaScript
Operators in JavaScript are symbols that perform operations on operands (values or variables). They allow you to manipulate and perform calculations on data.

## Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations.
- Subtraction `-`: Subtracts the second operand from the first.
- Multiplication `*`: Multiplies two operands.
- Division `/`: Divides the first operand by the second.
- Modulus `%`: Returns the remainder of the division.
- Increment `++`: Increases the value of the operand by 1.
- Decrement `--`: Decreases the value of the operand by 1.

## Assignment Operators
Assignment operators are used to assign values to variables.
- Assignment `=`: Assigns the value on the right to the variable on the left.
- Addition assignment `+=`: Adds the value on the right to the variable on the left and assigns the result to the variable.
- Subtraction assignment `-=`: Subtracts the value on the right from the variable on the left and assigns the result to the variable.
- Multiplication assignment `*=`: Multiplies the variable on the left by the value on the right and assigns the result to the variable.
- Division assignment `/=`: Divides the variable on the left by the value on the right and assigns the result to the variable.
- Modulus assignment `%=`: Calculates the modulus of the variable on the left with the value on the right and assigns the result to the variable.

## Comparison Operators
Comparison operators are used to compare values.
- Equal to `==`: Checks if two values are equal.
- Not equal to `!=`: Checks if two values are not equal.
- Greater than `>`: Checks if the value on the left is greater than the value on the right.
- Less than `<`: Checks if the value on the left is less than the value on the right.
- Greater than or equal to `>=`: Checks if the value on the left is greater than or equal to the value on the right.
- Less than or equal to `<=`: Checks if the value on the left is less than or equal to the value on the right.

## Logical Operators
- OR `||`: Returns true if at least one of the operands is true.
- NOT `!`: Returns the opposite boolean value of the operand.

## Ternary Operators
The ternary operator is a shorthand way of writing an if-else statement.
Syntax: `condition ? expression1 : expression2`
If the condition is true, expression1 is evaluated. Otherwise, expression2 is evaluated.

## Bitwise Operators
- OR `|`: Performs a bitwise OR operation.
- XOR `^`: Performs a bitwise XOR operation.
- NOT `~`: Performs a bitwise NOT operation.
- Left shift `<<`: Shifts the bits to the left.
- Right shift `>>`: Shifts the bits to the right.

## Anomalies
There are some anomalies in JavaScript when it comes to string concatenation and addition with different data types:
- `console.log(1 + "2")` will result in the string "12".
- `console.log("1" + 2)` will also result in the string "12".
- `console.log("1" + 2 + 3)` will result in the string "123".
- `console.log(1 + 2 + "3")` will result in the string "33".

## Note
- Whenever `""` is in the first place the whole bracket will be considered as a string, and if `""` is in the last position then starting numbers will be treated normally and the last one with `""` will be treated as a String. 
- These anomalies occur because JavaScript performs implicit type coercion when combining strings and numbers.

### Example Code:
```javascript
// Arithmetic Operators
let x = 10;
let y = 5;
let result = x - y;
console.log(result); // Output: 5
```

```javascript
// Assignment Operators
let a = 5;
a += 3;
console.log(a); // Output: 8
```

```javascript
// Comparison Operators
let b = 10;
let c = 5;
console.log(b > c); // Output: true
```

```javascript
// Logical Operators
let d = true;
let e = false;
console.log(d || e); // Output: true
```

```javascript
// Ternary Operators
let f = 10;
let g = 5;
let max = (f > g) ? f : g;
console.log(max); // Output: 10
```

```javascript
// Bitwise Operators
let h = 5;
let i = 3;
let bitwiseOr = h | i;
console.log(bitwiseOr); // Output: 7
```
