# Comparison in JavaScript

In JavaScript, comparison operators are used to compare values and determine their relationship. These operators return a boolean value (true or false) based on the comparison result.

## Equality Operators

The equality operators are used to compare two values for equality.

- The `==` operator compares the values, but performs type coercion if the operands are of different types.
- The `===` operator compares the values and types strictly, without performing type coercion.

Example:

```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

## Inequality Operators

The inequality operators are used to compare two values for inequality.

- The `!=` operator compares the values, but performs type coercion if the operands are of different types.
- The `!==` operator compares the values and types strictly, without performing type coercion.

Example:

```javascript
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
```

## Relational Operators

The relational operators are used to compare two values and determine their relationship.

- The `<` operator checks if the left operand is less than the right operand.
- The `>` operator checks if the left operand is greater than the right operand.
- The `<=` operator checks if the left operand is less than or equal to the right operand.
- The `>=` operator checks if the left operand is greater than or equal to the right operand.

Example:

```javascript
console.log(5 < 10); // true
console.log(10 > 5); // true
console.log(5 <= 5); // true
console.log(10 >= 5); // true
```

## Logical Operators

The logical operators are used to combine multiple comparison expressions.

- The `&&` operator returns true if both operands are true.
- The `||` operator returns true if at least one of the operands is true.
- The `!` operator negates the result of the operand.

Example:

```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```
